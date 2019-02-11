import { TestBed } from '@angular/core/testing';

import { ShapesStandardService } from './shapes-standardv2.service';

describe('StandardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShapesStandardService = TestBed.get(ShapesStandardService);
    expect(service).toBeTruthy();
  });
});
