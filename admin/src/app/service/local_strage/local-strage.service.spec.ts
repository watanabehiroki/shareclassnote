import { TestBed } from '@angular/core/testing';

import { LocalStrageService } from './local-strage.service';

describe('LocalStrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStrageService = TestBed.get(LocalStrageService);
    expect(service).toBeTruthy();
  });
});
