import { TestBed } from '@angular/core/testing';

import { StandardLinkService } from './standard-link.service';

describe('StandardLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardLinkService = TestBed.get(StandardLinkService);
    expect(service).toBeTruthy();
  });
});
