import { TestBed } from '@angular/core/testing';

import { StoService } from './sto.service';

describe('StoService', () => {
  let service: StoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
