import { ChangeDetectionStrategy, Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Subscription } from 'rxjs';
import { Quiz, Question } from '../../../../models/quiz.model';
import { QuizEntityService } from '../../../../shared/entities/services/quiz-entity.service';
import { FormArray, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AuthService } from '../../../../services/auth/auth.service';
import { AnswersEntityService } from '../../../../shared/entities/services/answers-entity.service';
import { Answers } from '../../../../models/answers.model';
import { ten, two, zero } from '../../../../shared/constants/numbers';
import { Post } from '../../../../models/post.model';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';
import { User } from '../../../../models/user.model';

interface QuestionWithType extends Question {
  type: 'single' | 'multi'
}

interface QuizWithType extends Omit<Quiz, 'questions'> {
  questions: QuestionWithType[]
}

@Component({
  selector: 'wo-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class QuizDialogComponent implements OnInit, OnDestroy {

  public quiz?: QuizWithType
  private sub = new Subscription()
  public form: FormArray<FormControl<number[]>>

  constructor(
    private quizService: QuizEntityService,
    private answersService: AnswersEntityService,
    private postService: PostEntityService,
    private auth: AuthService,
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { job: Post, user: User } | undefined
  ) {
    this.form = this.fb.array<FormControl<number[]>>([])
  }

  ngOnInit(): void {
    if (!this.data?.job?.id) return
    this.sub.add(
      this.quizService.entities$.pipe(map(quizzes => quizzes[0])).subscribe(quiz => {
        const questions: QuestionWithType[] = quiz?.questions.map(q => {
          this.form.push(this.fb.control<number[]>([]))
          const answer = q.options.filter(option => option.correct)
          const type = answer.length > 1 ? 'multi' : 'single'
          return { ...q, type }
        })
        this.quiz = { ...quiz, questions }
      })
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  public onNoClick(): void {
    this.dialogRef.close()
  }

  public setFormValue(index: number, event: MatRadioChange): void {
    this.form.at(index).setValue([event.value])
  }

  public setMultiFormValue(questionIndex: number, optionIndex: number, event: MatCheckboxChange): void {
    const values = new Set(this.form.at(questionIndex).value)
    if (event.checked) values.add(optionIndex)
    else values.delete(optionIndex)
    this.form.at(questionIndex).setValue(Array.from(values))
  }

  public submit(): void {
    if (!this.data?.user || !this.data?.job?.id || !this.quiz) return
    const questions = this.quiz.questions.length
    const grade = this.quiz.questions.map((_, i) => this.answerGrade(i)).reduce((prev, current) => prev + current, zero) / questions
    const answers: Answers = {
      user: this.data.user.uid,
      quiz: this.data.job.id,
      answers: this.form.value,
      grade: Number(grade.toFixed(two))
    }
    this.answersService.upsert(answers)
    this.auth.updateUserData({
      ...this.data.user,
      jobs: this.data.user.jobs ? [...this.data.user.jobs, this.data.job.id ] : [ this.data.job.id ]
    })
    this.postService.update({
      ...this.data.job,
      applicants: this.data.job.applicants ? [...this.data.job.applicants, this.data.user.uid ] : [ this.data.user.uid ]
    })
    this.dialogRef.close(grade)
  }

  private answerGrade(index: number): number {
    const answers = this.quiz!.questions[index].options.filter(o => o.correct).length
    const correct = this.form.at(index).value.filter(i => this.quiz?.questions[index].options[i].correct).length
    return answers === zero ? ten : Number(((correct * ten) / answers).toFixed(two))
  }

}
