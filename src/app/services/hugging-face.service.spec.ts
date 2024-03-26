import { TestBed } from '@angular/core/testing';

import { HuggingFaceService } from './hugging-face.service';

describe('HuggingFaceService', () => {
  let service: HuggingFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuggingFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
