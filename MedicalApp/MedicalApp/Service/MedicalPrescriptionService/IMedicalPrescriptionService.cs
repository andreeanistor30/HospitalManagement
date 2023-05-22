using MedicalApp.Models.Domain;

namespace MedicalApp.Service.MedicalPrescriptionService
{
    public interface IMedicalPrescriptionService
    {
        public MedicalPrescription AddPrescription(string identityno, string medicine, string route, string dosage, int noofdays, string instruction);
        public List<MedicalPrescription> GetMedicalPrescriptions(string identityNo);
    }
}
