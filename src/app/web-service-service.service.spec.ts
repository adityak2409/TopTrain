import { TestBed } from '@angular/core/testing';

import { WebServiceServiceService } from './web-service-service.service';

describe('WebServiceServiceService', () => {
  let service: WebServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
