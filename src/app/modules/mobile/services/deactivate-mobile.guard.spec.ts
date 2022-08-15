import { TestBed } from '@angular/core/testing';

import { DeactivateMobileGuard } from './deactivate-mobile.guard';

describe('DeactivateMobileGuard', () => {
  let guard: DeactivateMobileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateMobileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
