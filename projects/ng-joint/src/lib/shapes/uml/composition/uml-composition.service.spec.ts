import { TestBed } from '@angular/core/testing';

import { UmlCompositionService } from './uml-composition.service';

describe('UmlCompositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlCompositionService = TestBed.get(UmlCompositionService);
    expect(service).toBeTruthy();
  });
});
