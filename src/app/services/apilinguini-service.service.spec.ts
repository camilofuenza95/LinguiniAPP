import { TestBed } from '@angular/core/testing';

import { APILinguiniServiceService } from './apilinguini-service.service';

describe('APILinguiniServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APILinguiniServiceService = TestBed.get(APILinguiniServiceService);
    expect(service).toBeTruthy();
  });
});
