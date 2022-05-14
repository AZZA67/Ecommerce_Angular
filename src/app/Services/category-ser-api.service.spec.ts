import { TestBed } from '@angular/core/testing';

import { CategorySerApiService } from './category-ser-api.service';

describe('CategorySerApiService', () => {
  let service: CategorySerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
