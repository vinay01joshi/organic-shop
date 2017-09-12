import { TestBed, inject } from '@angular/core/testing';
import { CatagoryService } from 'shared/services/catagory.service';

describe('CatagoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatagoryService]
    });
  });

  it('should be created', inject([CatagoryService], (service: CatagoryService) => {
    expect(service).toBeTruthy();
  }));
});
