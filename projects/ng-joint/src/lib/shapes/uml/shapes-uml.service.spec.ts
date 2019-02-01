import { TestBed } from '@angular/core/testing';

import { ShapesUmlService } from './shapes-uml.service';

describe('ShapesUmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShapesUmlService = TestBed.get(ShapesUmlService);
    expect(service).toBeTruthy();
  });
});
