import { TestBed } from '@angular/core/testing';

import { ChangemysqldateService } from './changemysqldate.service';

describe('ChangemysqldateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangemysqldateService = TestBed.get(ChangemysqldateService);
    expect(service).toBeTruthy();
  });
});
