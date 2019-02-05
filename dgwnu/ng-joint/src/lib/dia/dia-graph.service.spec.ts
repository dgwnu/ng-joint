import { TestBed } from '@angular/core/testing';

import { DiaGraphService } from './dia-graph.service';

describe('GraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaGraphService = TestBed.get(DiaGraphService);
    expect(service).toBeTruthy();
  });
});
