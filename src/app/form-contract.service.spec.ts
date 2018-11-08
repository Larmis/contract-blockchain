import { TestBed } from '@angular/core/testing';

import { FormContractService } from './form-contract.service';

describe('FormContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormContractService = TestBed.get(FormContractService);
    expect(service).toBeTruthy();
  });
});
