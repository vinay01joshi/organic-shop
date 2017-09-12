import { TestBed, inject } from '@angular/core/testing';
import { AuthGurad } from 'shared/services/auth-guard.service';


describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGurad]
    });
  });

  it('should be created', inject([AuthGurad], (service: AuthGurad) => {
    expect(service).toBeTruthy();
  }));
});
