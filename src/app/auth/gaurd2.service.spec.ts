import { TestBed, inject } from '@angular/core/testing';

import { Gaurd2Service } from './gaurd2.service';

describe('Gaurd2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gaurd2Service]
    });
  });

  it('should be created', inject([Gaurd2Service], (service: Gaurd2Service) => {
    expect(service).toBeTruthy();
  }));
});
