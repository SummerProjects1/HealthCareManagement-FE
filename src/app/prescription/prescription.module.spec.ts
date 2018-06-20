import { PrescriptionModule } from './prescription.module';

describe('PrescriptionModule', () => {
  let prescriptionModule: PrescriptionModule;

  beforeEach(() => {
    prescriptionModule = new PrescriptionModule();
  });

  it('should create an instance', () => {
    expect(prescriptionModule).toBeTruthy();
  });
});
