import { TestBed } from '@angular/core/testing';

import { UmlGeneralizationService } from './uml-generalization.service';

describe('UmlGeneralizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlGeneralizationService = TestBed.get(UmlGeneralizationService);
    expect(service).toBeTruthy();
  });
});
