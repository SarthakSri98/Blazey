import { TestBed, inject } from '@angular/core/testing';

import { GaurdsService } from './gaurds.service';

describe('GaurdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdsService]
    });
  });

  it('should be created', inject([GaurdsService], (service: GaurdsService) => {
    expect(service).toBeTruthy();
  }));
});
