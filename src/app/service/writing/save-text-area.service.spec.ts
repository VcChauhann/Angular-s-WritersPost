import { TestBed } from '@angular/core/testing';

import { SaveTextAreaService } from './save-text-area.service';

describe('SaveTextAreaService', () => {
  let service: SaveTextAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveTextAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
