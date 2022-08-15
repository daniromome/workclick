import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, zip, from, tap } from 'rxjs';
import { AuthService } from '../../../../services/auth/auth.service';
import { QuizEntityService } from '../../../../shared/entities/services/quiz-entity.service';
import { Quiz } from 'src/app/models/quiz.model';
import { AnswersEntityService } from '../../../../shared/entities/services/answers-entity.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CvComponent } from './cv/cv.component';
import { UserWithAnswers } from '../../../../shared/interfaces/user-with-answers.interface';

@Component({
  selector: 'wo-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CandidatesComponent implements OnInit {

  public id: string
  public users$?: Observable<UserWithAnswers[]>
  public quiz?: Quiz
  private sub = new Subscription()
  private initialized = false
  public data?: MatTableDataSource<UserWithAnswers>
  public columns = ['index', 'name', 'email', 'phone', 'quiz', 'actions']
  public filter: FormControl<string>

  constructor(
    private quizService: QuizEntityService,
    private answersService: AnswersEntityService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private fb: NonNullableFormBuilder,
    private dialog: MatDialog
  ) {
    this.id = this.route.snapshot.params['post']
    this.filter = this.fb.control('')
  }

  ngOnInit(): void {
    this.sub.add(
      this.quizService.getWithQuery(this.id).pipe(map(quizzes => quizzes[0])).subscribe(quiz => {
        if (this.initialized) return
        this.quiz = quiz
        this.users$ = zip(
          this.auth.getPostUsers(this.id),
          this.quiz ? this.answersService.getWithQuery(quiz.id) : from([undefined])
        ).pipe(
          map(([users, answers]) => {
            return users.map((user, index) => ({ index, ...user, answers: answers?.find(a => a.user === user.uid )})) as UserWithAnswers[]
          })
        )
        this.sub.add(
          this.users$.subscribe(users => this.data = new MatTableDataSource(users))
        )
        this.initialized = true
      })
    )
    this.sub.add(
      this.filter.valueChanges.subscribe(filter => {
        if (this.data) this.data.filter = filter.trim().toLowerCase()
      })
    )
  }

  public openCV(user: UserWithAnswers): void {
    this.dialog.open(CvComponent, { data: user })
  }

}
