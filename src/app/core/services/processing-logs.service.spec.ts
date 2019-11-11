import { TestBed } from '@angular/core/testing';

import { ProcessingLogsService } from './processing-logs.service';

describe('ProcessingLogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessingLogsService = TestBed.get(ProcessingLogsService);
    expect(service).toBeTruthy();
  });
});
