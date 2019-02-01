import { TestBed } from '@angular/core/testing';

import { UmlAbstractService } from './uml-abstract.service';

describe('UmlAbstractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlAbstractService = TestBed.get(UmlAbstractService);
    expect(service).toBeTruthy();
  });
});
