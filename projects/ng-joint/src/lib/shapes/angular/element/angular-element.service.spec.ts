import { TestBed } from '@angular/core/testing';

import { AngularElementService } from './angular-element.service';

describe('AngularElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularElementService = TestBed.get(AngularElementService);
    expect(service).toBeTruthy();
  });
});
