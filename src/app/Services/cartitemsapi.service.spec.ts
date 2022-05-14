import { TestBed } from '@angular/core/testing';

import { CartitemsapiService } from './cartitemsapi.service';

describe('CartitemsapiService', () => {
  let service: CartitemsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartitemsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
