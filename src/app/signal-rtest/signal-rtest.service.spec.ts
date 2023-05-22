import { TestBed } from '@angular/core/testing';

import { SignalRTestService } from './signal-rtest.service';

describe('SignalRTestService', () => {
  let service: SignalRTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
