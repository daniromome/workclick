import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, NonNullableFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, map, firstValueFrom, filter, Observable } from 'rxjs';
import { minimumWage, one, zero, minimumAge } from '../../../../shared/constants/numbers';
import { hoursAndMinutes } from '../../../../shared/constants/regex';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';
import { Post } from '../../../../models/post.model';
import { FormFrom } from '../../../../shared/utils/form-from.type';
import { JobType } from '../../../../shared/enums/job-type.interface';
import { Gender } from '../../../../shared/enums/gender.interface';
import { JobTypeType } from '../../../../shared/types/job-type';
import { GenderType } from '../../../../shared/types/gender';
import { AuthService } from '../../../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizFormComponent } from '../quiz-form/quiz-form.component';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizEntityService } from '../../../../shared/entities/services/quiz-entity.service';
interface PostForm extends Omit<FormFrom<Post>, 'type' | 'gender' | 'id' | 'user' | 'applicants'> {
  type: FormControl<JobTypeType>
  gender: FormControl<GenderType>
}

@Component({
  selector: 'wo-upsert-post',
  templateUrl: './upsert-post.component.html',
  styleUrls: ['./upsert-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UpsertPostComponent implements OnInit, OnDestroy {

  public form: FormGroup<PostForm>
  private post$: Observable<Post | undefined>
  private sub: Subscription = new Subscription()
  public quizzes: Quiz[] = []
  public id?: string

  constructor(
    private postService: PostEntityService,
    private quizService: QuizEntityService,
    private auth: AuthService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
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
      type: fb.control<JobTypeType>('FULLTIME', { validators: [ Validators.required ] }),
      quantity: fb.control<number>(one),
      schedule: fb.array([
        fb.control('', { validators: [ Validators.pattern(hoursAndMinutes) ]}),
        fb.control('', { validators: [ Validators.pattern(hoursAndMinutes) ]})
      ]),
      career: fb.control(''),
      gender: fb.control<GenderType>('ANY'),
      age: fb.array([
        fb.control<number>(zero),
        fb.control<number>(zero)
      ]),
      experience: fb.control<number>(zero),
      skills: fb.control('', { validators: [ Validators.required ] }),
      activities: fb.control('', { validators: [ Validators.required ] }),
      benefits: fb.control('')
    })
    this.id = this.route.snapshot.queryParams['id']
    this.post$ = this.postService.entityMap$.pipe(map(posts => this.id ? posts[this.id] : undefined))
  }

  ngOnInit(): void {
    this.sub.add(
      this.post$.subscribe(post => {
        this.form.controls.title.setValue(post?.title || '')
        this.form.controls.company.setValue(post?.company || '')
        this.form.controls.address.setValue(post?.address || '')
        this.form.controls.position.setValue(post?.position || '')
        this.form.controls.salary.setValue(post?.salary || [zero, zero])
        this.form.controls.type.setValue(JobType[post?.type || zero] as JobTypeType)
        this.form.controls.quantity.setValue(post?.quantity || one)
        this.form.controls.schedule.setValue(post?.schedule || ['', ''])
        this.form.controls.career.setValue(post?.career || '')
        this.form.controls.gender.setValue(Gender[post?.gender || zero] as GenderType)
        this.form.controls.age.setValue(post?.age || [zero, zero])
        this.form.controls.experience.setValue(post?.experience || zero)
        this.form.controls.skills.setValue(post?.skills || '')
        this.form.controls.activities.setValue(post?.activities || '')
        this.form.controls.benefits.setValue(post?.benefits || '')
      })
    )
    this.sub.add(
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
      })
    )
    this.sub.add(
      this.form.controls.age.valueChanges.subscribe(([min, max]) => {
        const minValidators = [Validators.min(minimumAge)]
        if (max) minValidators.push(Validators.max(max - one))
        this.form.controls.age.controls[zero].setValidators(minValidators)
        this.form.controls.age.controls[one].setValidators([Validators.min(min || minimumAge + one)])
        this.form.controls.age.controls[zero].updateValueAndValidity({ emitEvent: false })
        this.form.controls.age.controls[one].updateValueAndValidity({ emitEvent: false })
      })
    )
    if (this.id) this.quizService.getWithQuery(this.id)
    this.sub.add(
      this.quizService.entities$.subscribe(quizzes => this.quizzes = quizzes)
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  public async submit(): Promise<void> {
    const user = await firstValueFrom(this.auth.user$.pipe(map(user => user?.uid)))
    if (!user) return
    const form = this.form.getRawValue()
    const post: Post = {
      ...form,
      salary: [form.salary[0], form.salary[1]],
      type: JobType[form.type],
      gender: Gender[form.gender],
      age: [form.age[0], form.age[1]],
      schedule: [form.schedule[0], form.schedule[1]],
      user
    }
    if (this.id) post.id = this.id
    this.postService.upsert(post).subscribe(p => {
      if (!p.id) return
      this.quizzes.forEach(quiz => this.quizService.upsert({ ...quiz, post: p.id! }))
    })
  }

  public newQuiz(): void {
    const dialogRef = this.dialog.open(QuizFormComponent, { disableClose: true })
    dialogRef.afterClosed().subscribe(quiz => {
      if (quiz) this.quizzes.push(quiz)
    })
  }

  public deleteQuiz(index: number): void {
    this.quizzes.splice(index, 1);
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
