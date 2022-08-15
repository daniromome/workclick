import { NgModule } from '@angular/core';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { QuizEntityService } from './services/quiz-entity.service';
import { PostEntityService } from './services/post-entity.service';
import { AnswersEntityService } from './services/answers-entity.service';
import { PostDataService } from './services/post-data.service';
import { QuizDataService } from './services/quiz-data.service';
import { AnswersDataService } from './services/answers-data.service';

const entityMetadataMap: EntityMetadataMap = {
  Post: {

  },
  Quiz: {

  },
  Answers: {

  }
}

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    PostEntityService,
    QuizEntityService,
    AnswersEntityService,
    PostDataService,
    QuizDataService,
    AnswersDataService
  ]
})
export class EntitiesModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private postDataService: PostDataService,
    private quizDataService: QuizDataService,
    private answersDataService: AnswersDataService
  ) {
    eds.registerMetadataMap(entityMetadataMap)
    entityDataService.registerServices({
      Post: postDataService,
      Quiz: quizDataService,
      Answers: answersDataService
    })
  }

}
