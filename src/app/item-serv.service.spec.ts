import { TestBed, inject } from '@angular/core/testing';

import { ItemServService } from './item-serv.service';

describe('ItemServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemServService]
    });
  });

  it('should be created', inject([ItemServService], (service: ItemServService) => {
    expect(service).toBeTruthy();
  }));
});
