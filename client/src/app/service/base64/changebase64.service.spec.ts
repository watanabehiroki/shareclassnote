import { TestBed } from '@angular/core/testing';

import { Changebase64Service } from './changebase64.service';

describe('Changebase64Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Changebase64Service = TestBed.get(Changebase64Service);
    expect(service).toBeTruthy();
  });
});
