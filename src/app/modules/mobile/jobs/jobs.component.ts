import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostEntityService } from '../../../shared/entities/services/post-entity.service';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/post.model';
import { JobSearchService } from '../../../shared/entities/services/job-search.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizDialogComponent } from './quiz-dialog/quiz-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { six } from '../../../shared/constants/numbers';
import { AuthService } from '../../../services/auth/auth.service';
import { QuizEntityService } from '../../../shared/entities/services/quiz-entity.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'wo-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {

  public jobs$: Observable<Post[]>
  public control: FormControl<string>
  public applied: Set<string>
  public user: User | undefined
  private sub = new Subscription()

  constructor(
    private quizService: QuizEntityService,
    private auth: AuthService,
    private postService: PostEntityService,
    private jobSearchService: JobSearchService,
    private router: Router,
    private dialog: MatDialog,
    private toast: MatSnackBar
  ) {
    this.jobs$ = this.postService.entities$
    this.control = new FormControl<string>('', { nonNullable: true })
    this.applied = new Set<string>()
  }

  ngOnInit(): void {
    this.sub.add(
      this.auth.user$.subscribe(u => {
        this.applied = new Set<string>(u?.jobs || [])
        this.user = u
      })
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  search(): void {
    if (this.control.value.length < 1) this.postService.getAll()
    this.jobSearchService.search({
      q: this.control.value,
      query_by: 'title,position,company,salary,activities,skills,career,benefits,address,age'
    })
  }

  details(job: Post) {
    if (job) this.router.navigate(['mobile', 'jobs', job.id])
  }

  apply(job: Post) {
    if (!job.id || !this.user) return
    const applied = this.applied.has(job.id)
    this.quizService.getWithQuery(job.id).subscribe(quizzes => {
      if (quizzes.length > 0) {
        const dialogRef = this.dialog.open(QuizDialogComponent, { data: applied ? undefined : { job, user: this.user }, disableClose: true })
        dialogRef.afterClosed().subscribe(result => {
          if (typeof result !== 'number') return
          if (result > six) this.toast.open('¡Has completado el quiz con una calificación aprobatoria! 🎉', 'OK', { duration: 3000 })
          else this.toast.open('Has reprobado el quiz ❌', 'OK', { duration: 3000 })
        })
      } else {
        if (!this.user || !job.id) return
        this.auth.updateUserData({
          ...this.user,
          jobs: this.user.jobs ? [...this.user.jobs, job.id ] : [ job.id ]
        })
        this.postService.upsert({
          ...job,
          applicants: job.applicants ? [...job.applicants, this.user.uid ] : [ this.user.uid ]
        })
        this.toast.open('¡Se ha enviado tu solicitud de empleo! 🎉', 'OK', { duration: 3000 })
      }
    })

  }

}
