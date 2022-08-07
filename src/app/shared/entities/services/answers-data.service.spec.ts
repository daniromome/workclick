import { TestBed } from '@angular/core/testing';

import { AnswersDataService } from './answers-data.service';

describe('AnswersDataService', () => {
  let service: AnswersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
