import { TestBed } from '@angular/core/testing';

import { NonauthmiddlewareService } from './nonauthmiddleware.service';

describe('NonauthmiddlewareService', () => {
  let service: NonauthmiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonauthmiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
