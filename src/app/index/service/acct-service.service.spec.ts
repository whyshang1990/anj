import { TestBed } from '@angular/core/testing';

import { AcctServiceService } from './acct-service.service';

describe('AcctServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcctServiceService = TestBed.get(AcctServiceService);
    expect(service).toBeTruthy();
  });
});
