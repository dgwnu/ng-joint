import { TestBed } from '@angular/core/testing';

import { NgJointService } from './ng-joint.service';

describe('NgJointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgJointService = TestBed.get(NgJointService);
    expect(service).toBeTruthy();
  });
});
