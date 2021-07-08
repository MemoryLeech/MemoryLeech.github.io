import { TestBed } from '@angular/core/testing';

import { StartupService } from './startup.service';

describe('StartupServiceService', () => {
  let service: StartupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
