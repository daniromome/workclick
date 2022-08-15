import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Quiz } from '../../../models/quiz.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService extends DefaultDataService<Quiz> {

  constructor(
    private firestore: AngularFirestore,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Quiz', http, httpUrlGenerator)
  }

  override upsert(entity: Quiz): Observable<Quiz> {
    const id = entity.id || this.firestore.createId()
    const quizRef = this.firestore.doc<Quiz>(`quiz/${id}`)
    return from(quizRef.set(entity, { merge: true })).pipe(map(() => ({ ...entity, id })))
  }

  override getWithQuery(queryParams: string | QueryParams): Observable<Quiz[]> {
    return this.firestore.collection<Quiz>('quiz', ref => ref.where('post', '==', queryParams)).get().pipe(
      map(quizzes => quizzes.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    )
  }
}
