import { TestBed } from '@angular/core/testing';

import { TeamlistService } from './teamlist.service';

describe('TeamlistService', () => {
  let service: TeamlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
