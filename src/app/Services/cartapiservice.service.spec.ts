import { TestBed } from '@angular/core/testing';

import { CartapiserviceService } from './cartapiservice.service';

describe('CartapiserviceService', () => {
  let service: CartapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
