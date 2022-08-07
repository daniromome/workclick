import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Quiz } from '../../../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizEntityService extends EntityCollectionServiceBase<Quiz> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Quiz', serviceElementsFactory)
  }
}
