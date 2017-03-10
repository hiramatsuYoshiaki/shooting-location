/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanDeactiveGuardService } from './can-deactive-guard.service';

describe('CanDeactiveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactiveGuardService]
    });
  });

  it('should ...', inject([CanDeactiveGuardService], (service: CanDeactiveGuardService) => {
    expect(service).toBeTruthy();
  }));
});
