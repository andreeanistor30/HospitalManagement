using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Text;

namespace MedicalApp.Service.PatientService
{
    public class PatientService:IPatientService
    {
        public readonly ApplicationDatabaseContext context;

        public PatientService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public Patient AddPatient(PatientDTO patientDTO)
        {

            var patient = new Patient()
            {
                FirstName = patientDTO.FirstName,
                LastName = patientDTO.LastName,
                Username = patientDTO.FirstName + patientDTO.LastName,
                Password = patientDTO.FirstName,
            };
            var tmpSource = ASCIIEncoding.ASCII.GetBytes(patient.Password);
            byte[] tmpNewHash;
            var savedPasswordHash = new XSystem.Security.Cryptography.MD5CryptoServiceProvider().ComputeHash(tmpSource);
            patient.Password = Convert.ToHexString(savedPasswordHash);
            var findDoctor = context.Doctors.Where(d => d.FirstName == patientDTO.DoctorName).FirstOrDefault();
            if (findDoctor != null)
            {
                patient.DoctorId = findDoctor.Id;
                context.Add(patient);
                context.SaveChanges();
                return patient;
            }
            else return null;
            
        }
    }
}
