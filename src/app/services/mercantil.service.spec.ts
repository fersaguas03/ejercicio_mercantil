import { TestBed } from '@angular/core/testing';

import { MercantilService } from './mercantil.service';

describe('MercantilService', () => {
  let service: MercantilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercantilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
