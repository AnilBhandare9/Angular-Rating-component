import { TestBed } from '@angular/core/testing';

import { AngRatingService } from './ang-rating.service';

describe('AngRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngRatingService = TestBed.get(AngRatingService);
    expect(service).toBeTruthy();
  });
});
