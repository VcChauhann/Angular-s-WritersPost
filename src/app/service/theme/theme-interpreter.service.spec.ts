import { TestBed } from '@angular/core/testing';

import { ThemeInterpreterService } from './theme-interpreter.service';

describe('ThemeInterpreterService', () => {
  let service: ThemeInterpreterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeInterpreterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
