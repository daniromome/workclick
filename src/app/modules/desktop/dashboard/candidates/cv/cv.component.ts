import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserWithAnswers } from '../../../../../shared/interfaces/user-with-answers.interface';
import { nineteenseventy } from '../../../../../shared/constants/numbers';

@Component({
  selector: 'wo-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent implements OnInit {

  public age?: number
  public education = false
  public experience = false

  constructor(
    private dialogRef: MatDialogRef<CvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserWithAnswers
  ) { }

  public onNoClick() {
    this.dialogRef.close()
  }

  public ngOnInit(): void {
    this.age = this.data.birthdate ? new Date(Date.now() - new Date(this.data.birthdate!).getTime()).getUTCFullYear() - nineteenseventy : undefined
    this.education = this.data.cv?.education?.length ? this.data.cv.education.length > 0 : false
    this.experience = this.data.cv?.experience?.length ? this.data.cv.experience.length > 0 : false
  }

}
