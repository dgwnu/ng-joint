import { TestBed } from '@angular/core/testing';

import { UmlClassService } from './uml-class.service';

describe('UmlClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlClassService = TestBed.get(UmlClassService);
    expect(service).toBeTruthy();
  });
});
