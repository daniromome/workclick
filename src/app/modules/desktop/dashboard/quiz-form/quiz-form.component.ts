import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NonNullableFormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormFrom } from '../../../../shared/utils/form-from.type';
import { Quiz, Question, Option } from '../../../../models/quiz.model';

interface QuestionForm extends Omit<FormFrom<Question>, 'options'> {
  options: FormArray<FormGroup<FormFrom<Option>>>
}

interface QuizForm extends Omit<FormFrom<Quiz>, 'id' | 'post' | 'questions'> {
  questions: FormArray<FormGroup<QuestionForm>>
}

@Component({
  selector: 'wo-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent {

  public form: FormGroup<QuizForm>

  constructor(
    public dialogRef: MatDialogRef<QuizFormComponent>,
    private fb: NonNullableFormBuilder
  ) {
    this.form = fb.group({
      title: fb.control(''),
      description: fb.control(''),
      questions: fb.array<FormGroup<QuestionForm>>([])
    })
  }

  public addQuestion(): void {
    this.form.controls.questions.push(
      this.fb.group({
        prompt: this.fb.control(''),
        options: this.fb.array<FormGroup<FormFrom<Option>>>([])
      })
    )
  }

  public addOption(index: number): void {
    this.form.controls.questions.at(index).controls.options.push(
      this.fb.group({
        description: this.fb.control(''),
        correct: this.fb.control(false)
      })
    )
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  submit(): void {
    this.dialogRef.close(this.form.value)
  }

  public removeOption(questionIndex: number, optionIndex: number): void {
    this.form.controls.questions.at(questionIndex).controls.options.removeAt(optionIndex)
  }
  public removeQuestion(index: number): void {
    this.form.controls.questions.removeAt(index)
  }

}
