import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInGuardGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
