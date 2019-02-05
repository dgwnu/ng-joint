import { TestBed } from '@angular/core/testing';

import { ShapesAngularService } from './shapes-angular.service';

describe('ShapesAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShapesAngularService = TestBed.get(ShapesAngularService);
    expect(service).toBeTruthy();
  });
});
