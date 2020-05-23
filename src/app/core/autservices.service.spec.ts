import { TestBed } from '@angular/core/testing';

import { AutservicesService } from './autservices.service';

describe('AutservicesService', () => {
  let service: AutservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
