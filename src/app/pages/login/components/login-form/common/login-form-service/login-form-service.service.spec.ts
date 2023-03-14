import { TestBed } from '@angular/core/testing';

import { LoginFormServiceService } from './login-form-service.service';

describe('LoginFormServiceService', () => {
  let service: LoginFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
