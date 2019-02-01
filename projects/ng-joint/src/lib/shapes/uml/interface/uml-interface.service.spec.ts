import { TestBed } from '@angular/core/testing';

import { UmlInterfaceService } from './uml-interface.service';

describe('UmlInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmlInterfaceService = TestBed.get(UmlInterfaceService);
    expect(service).toBeTruthy();
  });
});
