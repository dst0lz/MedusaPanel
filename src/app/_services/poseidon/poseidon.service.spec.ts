import { TestBed } from '@angular/core/testing';

import { PoseidonService } from './poseidon.service';

describe('PoseidonService', () => {
  let service: PoseidonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoseidonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
