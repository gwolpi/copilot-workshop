import { TestBed } from '@angular/core/testing';

import { LicencePlateService } from './licence-plate.service';

describe('LicencePlateService', () => {
  let service: LicencePlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicencePlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
