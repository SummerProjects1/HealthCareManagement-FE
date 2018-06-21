export interface IPrescription{
    _id?: string;
    prescriptionDate: String;
    prescriptionTime: String;
    patientFName: String;
    patientLName: String;
    patientEmail: String;
    doctorFName: String;
    doctorLName: String;
    doctorEmail: String;
    medication: String;
}