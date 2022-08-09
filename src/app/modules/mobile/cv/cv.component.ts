import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormFrom } from '../../../shared/utils/form-from.type';
import { User, PreviousJob, IntervalDate, Education, CV } from '../../../models/user.model';
import { NonNullableFormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { JobTypeType } from '../../../shared/types/job-type';
import { sixty, five } from '../../../shared/constants/numbers';
import { AuthService } from '../../../services/auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { JobType } from '../../../shared/enums/job-type.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserForm extends Omit<
  FormFrom<User>,
  'uid' | 'name' | 'email' | 'photo' | 'cv' | 'phone' | 'birthdate' | 'address'
> {
  cv: FormGroup<CVForm>
  phone: FormControl<string>
  birthdate: FormControl<Date>
  address: FormControl<string>
}

interface CVForm extends Omit<FormFrom<CV>, 'education' | 'experience'> {
  education: FormArray<FormGroup<FormFrom<Education>>>
  experience: FormArray<FormGroup<PreviousJobForm>>
}

interface PreviousJobForm extends Omit<FormFrom<PreviousJob>, 'type'> {
  type: FormControl<JobTypeType>
}
@Component({
  selector: 'wo-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit, OnDestroy {

  private user$: Observable<User | undefined>
  private user: User | undefined
  public form: FormGroup<UserForm>
  private sub: Subscription = new Subscription();
  private fetched: boolean = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: MatSnackBar
  ) {
    this.form = fb.group({
      cv: fb.group({
        url: fb.control(''),
        about: fb.control(''),
        education: fb.array<FormGroup<FormFrom<Education>>>([]),
        experience: fb.array<FormGroup<PreviousJobForm>>([]),
        skills: fb.array<string>([]),
      }),
      phone: fb.control(''),
      birthdate: fb.control(new Date()),
      address: fb.control(''),
    })
    this.user$ = this.auth.user$
  }
  ngOnInit(): void {
    this.sub.add(this.user$.subscribe(u => {
      this.user = u
      if (!this.fetched && (u?.cv || u?.address || u?.birthdate || u?.phone)) {
        if(u.address) this.form.controls.address.setValue(u.address)
        if(u.birthdate) this.form.controls.birthdate.setValue(new Date(u.birthdate))
        if(u.phone) this.form.controls.phone.setValue(u.phone)
        if(u.cv) {
          u.cv.education.forEach(e => this.newEducationForm(e))
          u.cv.experience.forEach(e => this.newPreviousJobForm(e))
          this.form.controls.cv.controls.about.setValue(u.cv.about)
          this.form.controls.cv.controls.education.setValue(u.cv.education)
          this.form.controls.cv.controls.skills.setValue(u.cv.skills)
          this.form.controls.cv.controls.url.setValue(u.cv.url)
        }
        this.fetched = true
      }
    }))
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  newEducationForm(education?: Education): void {
    this.form.controls.cv.controls.education.push(
      this.fb.group({
        at: this.fb.control(education?.at || '', { validators: [
          Validators.required
        ]}),
        location: this.fb.control(education?.location || '', { validators: [
          Validators.required
        ]}),
        start: this.newIntervalForm(education?.start),
        end: this.newIntervalForm(education?.end),
        degree: this.fb.control(education?.degree || '', { validators: [
          Validators.required
        ]}),
        career: this.fb.control(education?.career || '', { validators: [
          Validators.required
        ]}),
      })
    )
  }


  newPreviousJobForm(job?: PreviousJob): void {
    this.form.controls.cv.controls.experience.push(
      this.fb.group({
        position: this.fb.control(job?.position || '', { validators: [
          Validators.required
        ]}),
        at: this.fb.control(job?.at || '', { validators: [
          Validators.required
        ]}),
        location: this.fb.control(job?.location || '', { validators: [
          Validators.required
        ]}),
        start: this.newIntervalForm(job?.start),
        end: this.newIntervalForm(job?.end),
        type: this.fb.control<JobTypeType>(job?.type ? JobType[job.type] as JobTypeType : 'FULLTIME', { validators: [
          Validators.required
        ]}),
        skills: this.fb.array<string>(job?.skills || []),
      })
    )
  }

  private newIntervalForm(interval?: IntervalDate): FormGroup<FormFrom<IntervalDate>> {
    const year = new Date().getFullYear()
    return this.fb.group({
      month: this.fb.control<number>(interval?.month || 1, { validators: [
        Validators.required
      ]}),
      year: this.fb.control<number>(interval?.year || 1, { validators: [
        Validators.required,
        Validators.min(year - sixty),
        Validators.max(year + five)
      ] })
    })
  }

  removeEducationForm(index: number): void {
    this.form.controls.cv.controls.education.removeAt(index)
  }

  removeJobForm(index: number): void {
    this.form.controls.cv.controls.experience.removeAt(index)
  }

  async save(): Promise<void> {
    if (!this.user) return
    const form = this.form.getRawValue()
    const updatedCV: CV = {
      ...form.cv,
      experience: form.cv.experience.map(e => ({ ...e, type: JobType[e.type] }))
    }
    const updatedUser: User = {
      ...this.user,
      ...form,
      birthdate: form.birthdate.toUTCString(),
      cv: updatedCV
    }
    await this.auth.updateUserData(updatedUser)
    await this.router.navigateByUrl('/mobile/jobs')
    this.toast.open('CV digital guardado con éxito', 'OK', { duration: 2000 })
  }
}
