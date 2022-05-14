import { TestBed } from '@angular/core/testing';

import { ProductsSerApiService } from './products-ser-api.service';

describe('ProductsSerApiService', () => {
  let service: ProductsSerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
