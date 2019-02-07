import { TestBed } from '@angular/core/testing';

import { StragedataService } from './stragedata.service';

describe('StragedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StragedataService = TestBed.get(StragedataService);
    expect(service).toBeTruthy();
  });
});
