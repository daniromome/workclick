import { TestBed } from '@angular/core/testing';

import { AnswersEntityService } from './answers-entity.service';

describe('AnswersEntityService', () => {
  let service: AnswersEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswersEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
