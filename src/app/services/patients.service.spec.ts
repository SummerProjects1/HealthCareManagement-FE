import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './patients.service';

describe('PatientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService]
    });
  });

  it('should be created', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
