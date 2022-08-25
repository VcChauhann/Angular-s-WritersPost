import { TestBed } from '@angular/core/testing';

import { UpdateWritingService } from './update-writing.service';

describe('UpdateWritingService', () => {
  let service: UpdateWritingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateWritingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
