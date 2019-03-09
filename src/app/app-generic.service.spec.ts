import { TestBed } from '@angular/core/testing';

import { AppGenericService } from './app-generic.service';

describe('AppGenericService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppGenericService = TestBed.get(AppGenericService);
    expect(service).toBeTruthy();
  });
});
