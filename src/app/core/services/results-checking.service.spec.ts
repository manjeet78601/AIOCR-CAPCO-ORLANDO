import { TestBed } from '@angular/core/testing';

import { ResultsCheckingService } from './results-checking.service';

describe('ResultsCheckingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultsCheckingService = TestBed.get(ResultsCheckingService);
    expect(service).toBeTruthy();
  });
});
