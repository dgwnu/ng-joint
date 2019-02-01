import { TestBed } from '@angular/core/testing';

import { UmlAggregationService } from './uml-aggregation.service';

describe('UmlAggregationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlAggregationService = TestBed.get(UmlAggregationService);
    expect(service).toBeTruthy();
  });
});
