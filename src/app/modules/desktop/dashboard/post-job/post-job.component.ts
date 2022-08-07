import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, NonNullableFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { minimumWage, one, zero, minimumAge } from '../../../../shared/constants/numbers';
import { hoursAndMinutes } from '../../../../shared/constants/regex';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';
import { Post } from '../../../../models/post.model';
import { FormFrom } from '../../../../shared/utils/form-from.type';
import { JobType } from '../../../../shared/enums/job-type.interface';
import { Gender } from '../../../../shared/enums/gender.interface';

type JT = 'FULLTIME' | 'PARTTIME' | 'INTERNSHIP'
type JG = 'ANY' | 'F' | 'M'

interface PostForm extends Omit<FormFrom<Post>, 'type' | 'gender' | 'id'> {
  type: FormControl<JT>
  gender: FormControl<JG>
}

@Component({
  selector: 'wo-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostJobComponent implements OnInit, OnDestroy {

  public form: FormGroup<PostForm>
  private subs: Subscription[] = []

  constructor(
    private postService: PostEntityService,
    fb: NonNullableFormBuilder
  ) {
    this.form = fb.group({
      title: fb.control('', { validators: [ Validators.required ] }),
      company: fb.control('', { validators: [ Validators.required ] }),
      address: fb.control(''),
      position: fb.control('', { validators: [ Validators.required ] }),
      salary: fb.array([
        fb.control<number>(zero, { validators: [ Validators.required, Validators.min(minimumWage) ] }),
        fb.control<number>(zero, { validators: [ Validators.required, Validators.min(minimumWage + one) ] })
      ]),
      type: fb.control<JT>('FULLTIME', { validators: [ Validators.required ] }),
      quantity: fb.control<number>(one),
      schedule: fb.array([
        fb.control('', { validators: [ Validators.pattern(hoursAndMinutes) ]}),
        fb.control('', { validators: [ Validators.pattern(hoursAndMinutes) ]})
      ]),
      career: fb.control(''),
      gender: fb.control<JG>('ANY'),
      age: fb.array([
        fb.control<number>(zero),
        fb.control<number>(zero)
      ]),
      experience: fb.control<number>(0),
      skills: fb.control('', { validators: [ Validators.required ] }),
      activities: fb.control('', { validators: [ Validators.required ] }),
      benefits: fb.control('')
    })
  }

  ngOnInit(): void {
    this.subs.push(
      this.form.controls.salary.valueChanges.subscribe(([min, max]) => {
        const minValidators = [
          Validators.min(minimumWage),
          Validators.required
        ]
        if (max) minValidators.push(Validators.max(max - one))
        this.form.controls.salary.controls[zero].setValidators(minValidators)
        this.form.controls.salary.controls[one].setValidators([
          Validators.min(min || minimumWage + one),
          Validators.required
        ])
        this.form.controls.salary.controls[zero].updateValueAndValidity({ emitEvent: false })
        this.form.controls.salary.controls[one].updateValueAndValidity({ emitEvent: false })
      }),
      this.form.controls.age.valueChanges.subscribe(([min, max]) => {
        const minValidators = [Validators.min(minimumAge)]
        if (max) minValidators.push(Validators.max(max - one))
        this.form.controls.age.controls[zero].setValidators(minValidators)
        this.form.controls.age.controls[one].setValidators([Validators.min(min || minimumAge + one)])
        this.form.controls.age.controls[zero].updateValueAndValidity({ emitEvent: false })
        this.form.controls.age.controls[one].updateValueAndValidity({ emitEvent: false })
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }

  submit(): void {
    const form = this.form.getRawValue();
    const post: Post = {
      ...form,
      salary: [form.salary[0], form.salary[1]],
      type: JobType[form.type],
      gender: Gender[form.gender],
      age: [form.age[0], form.age[1]],
      schedule: [form.schedule[0], form.schedule[1]],
    }
    this.postService.upsert(post)
  }

  onlyNumbers(event: KeyboardEvent): void {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "Enter":
      case "Tab":
      case "Backspace":
        break

      default:
        event.preventDefault()
        break
    }
  }

}
