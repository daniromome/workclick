import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Post } from '../../../models/post.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService extends DefaultDataService<Post> {
  constructor(
    private firestore: AngularFirestore,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Course', http, httpUrlGenerator)
  }

  override getAll(): Observable<Post[]> {
    return this.firestore.collection<Post>('post').get().pipe(
      map(collection => collection.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    )
  }

  override upsert(entity: Post): Observable<Post> {
    const id = entity.id || this.firestore.createId()
    const postRef = this.firestore.doc<Post>(`post/${id}`)
    return from(postRef.set(entity, { merge: true })).pipe(map(() => ({ ...entity, id })))
  }
}
