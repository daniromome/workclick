import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Observable, from, map } from 'rxjs';
import { Answers } from '../../../models/answers.model';

interface AnswersFirebase extends Omit<Answers, 'answers'> {
  answers: string
}

@Injectable({
  providedIn: 'root'
})
export class AnswersDataService extends DefaultDataService<Answers> {

  constructor(
    private firestore: AngularFirestore,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Answers', http, httpUrlGenerator)
  }

  override upsert(entity: Answers): Observable<Answers> {
    const id = entity.id || this.firestore.createId()
    const answersRef = this.firestore.doc<AnswersFirebase>(`answers/${id}`)
    return from(answersRef.set({ ...entity, answers: JSON.stringify(entity.answers) }, { merge: true })).pipe(map(() => ({ ...entity, id })))
  }

  override getWithQuery(queryParams: string | QueryParams): Observable<Answers[]> {
    return this.firestore.collection<AnswersFirebase>('answers', ref => ref.where('quiz', '==', queryParams)).get().pipe(
      map(answers => answers.docs.map(doc => {
        const data = doc.data()
        return {...data, id: doc.id, answers: JSON.parse(data.answers) as number[][] }
      }))
    )
  }
}
