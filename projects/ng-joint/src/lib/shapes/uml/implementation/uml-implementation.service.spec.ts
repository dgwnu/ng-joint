import { TestBed } from '@angular/core/testing';

import { UmlImplementationService } from './uml-implementation.service';

describe('UmlImplementationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlImplementationService = TestBed.get(UmlImplementationService);
    expect(service).toBeTruthy();
  });
});
