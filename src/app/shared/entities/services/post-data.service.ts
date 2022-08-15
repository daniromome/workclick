import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Post } from '../../../models/post.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class PostDataService extends DefaultDataService<Post> {

  constructor(
    private firestore: AngularFirestore,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Post', http, httpUrlGenerator)
  }

  override getWithQuery(queryParams: string | QueryParams): Observable<Post[]> {
    return this.firestore.collection<Post>('post', ref => ref.where('user', '==', queryParams)).get().pipe(
      map(collection => collection.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    )
  }

  override getAll(): Observable<Post[]> {
    return this.firestore.collection<Post>('post').get().pipe(
      map(collection => collection.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    )
  }

  override upsert(entity: Post): Observable<Post> {
    const id = entity.id || this.firestore.createId()
    this.firestore.collection('quiz', ref => ref.where('post', '==', id))
      .get()
      .forEach(result => result.docs.forEach(doc => doc.ref.delete()))
    const postRef = this.firestore.doc<Post>(`post/${id}`)
    return from(postRef.set(entity, { merge: true })).pipe(map(() => ({ ...entity, id })))
  }

  override update(update: Update<Post>): Observable<Post> {
    const post = this.firestore.doc<Post>(`post/${update.id}`)
    post.ref.update(update.changes)
    return post.get().pipe(map(response => response.data()!))
  }
}
