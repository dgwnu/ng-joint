import { TestBed } from '@angular/core/testing';

import { DiaPaperService } from './dia-paper.service';

describe('NgJointPaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaPaperService = TestBed.get(DiaPaperService);
    expect(service).toBeTruthy();
  });
});
