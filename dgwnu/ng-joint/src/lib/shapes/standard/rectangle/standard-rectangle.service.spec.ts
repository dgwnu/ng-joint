import { TestBed } from '@angular/core/testing';

import { StandardRectangleService } from './standard-rectangle.service';

describe('StandardRectangleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardRectangleService = TestBed.get(StandardRectangleService);
    expect(service).toBeTruthy();
  });
});
