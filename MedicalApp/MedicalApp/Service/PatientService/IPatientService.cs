using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.PatientService
{
    public interface IPatientService
    {
        public Patient AddPatient(PatientDTO patientDTO);
    }
}
