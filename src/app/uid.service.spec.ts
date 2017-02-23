/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UidService } from './uid.service';

describe('UidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UidService]
    });
  });

  it('should ...', inject([UidService], (service: UidService) => {
    expect(service).toBeTruthy();
  }));
});
