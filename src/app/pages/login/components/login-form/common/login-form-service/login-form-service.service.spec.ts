import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form-service.service';

describe('LoginFormServiceService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
