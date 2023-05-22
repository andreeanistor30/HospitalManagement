using MedicalApp.Models.Domain;

namespace MedicalApp.Service.MedicalPrescriptionService
{
    public class MedicalPrescriptionService: IMedicalPrescriptionService
    {
        public readonly ApplicationDatabaseContext context;

        public MedicalPrescriptionService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public MedicalPrescription AddPrescription(string identityno, string medicine, string route, string dosage, int noofdays, string instruction)
        {
            var findPatientDetails = context.PersonalDetails.Where(p=>p.IdentityNo == identityno).FirstOrDefault();
            if (findPatientDetails != null)
            {
                var findPatient = context.Patients.Where(p => p.Id == findPatientDetails.PatientId).FirstOrDefault();
                if (findPatient != null)
                {
                    MedicalPrescription medicalPrescription = new MedicalPrescription()
                    {
                        Medicine = medicine,
                        Route = route,
                        Dosage = dosage,
                        NoOfDays = noofdays,
                        PatientId = findPatient.Id,
                        Instructions = instruction
                    };

                    context.MedicalPrescriptions.Add(medicalPrescription);
                    context.SaveChanges();
                    return medicalPrescription;
                }
                else return null;
            }
            else
                return null;
        }

        public List<MedicalPrescription> GetMedicalPrescriptions(string identityNo)
        {
            var findPersonalDetails = context.PersonalDetails.Where(p => p.IdentityNo == identityNo).FirstOrDefault();
            if (findPersonalDetails != null)
            {
                var patient = context.Patients.Where(p => p.Id == findPersonalDetails.PatientId).FirstOrDefault();
                if (patient != null)
                {
                    return context.MedicalPrescriptions.Where(m => m.PatientId == patient.Id).ToList();
                }
                else return null;

            }
            else return null;
        }
    }
}
