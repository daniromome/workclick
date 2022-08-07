import { TestBed } from '@angular/core/testing';

import { QuizEntityService } from './quiz-entity.service';

describe('QuizEntityService', () => {
  let service: QuizEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
