import { TestBed } from '@angular/core/testing';

import { GroupaddServiceService } from './groupadd-service.service';

describe('GroupaddServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupaddServiceService = TestBed.get(GroupaddServiceService);
    expect(service).toBeTruthy();
  });
});
