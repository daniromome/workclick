import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Answers } from '../../../models/answers.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersEntityService extends EntityCollectionServiceBase<Answers> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Answers', serviceElementsFactory)
  }
}
