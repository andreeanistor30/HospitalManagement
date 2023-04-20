using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Text;
using XAct;

namespace MedicalApp.Service.PatientService
{
    public class PatientService:IPatientService
    {
        public readonly ApplicationDatabaseContext context;

        public PatientService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }
        
        public IEnumerable<PatientDTOWrite> GetAllPatients()
        {
            IEnumerable<Patient> patients = context.Patients.ToList();
            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i=0;i<patients.Count();i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = patients.ElementAt(i).FirstName,
                    LastName = patients.ElementAt(i).LastName,
                    Diagnostic = patients.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d=>d.Id==patients.ElementAt(i).DoctorId).Select(d=>d.FirstName).First(),
                    Id = patients.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }
        public Patient AddPatient(PatientDTO patientDTO)
        {

            var patient = new Patient()
            {
                FirstName = patientDTO.FirstName,
                LastName = patientDTO.LastName,
                Username = patientDTO.FirstName + patientDTO.LastName,
                Password = patientDTO.FirstName,
                Diagnostic = "-",
                Treatment = "-"
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

        public Patient DeletePatient(Guid id)
        {
            var findPatient = context.Patients.Where(p => p.Id == id).FirstOrDefault();

            if (findPatient != null)
            {
                context.Patients.Remove(findPatient);
                context.SaveChanges();
                return findPatient;
            }
            else
                return null;
        }

        public IEnumerable<PatientDTOWrite> GetPatientByName(string firstName, string lastName)
        {
            var findPatient = context.Patients.Where(p => (p.FirstName == firstName && p.LastName == lastName) || (p.LastName == firstName && p.FirstName == lastName)||(p.LastName == lastName)||(p.FirstName == firstName)||(p.FirstName == lastName)||(p.LastName == firstName)).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }

        public IEnumerable<PatientDTOWrite> GetDoctorByName(string firstName,string lastName)
        {
            var id = context.Doctors.Where(d => (d.FirstName == firstName && d.LastName == lastName) || (d.LastName == firstName && d.FirstName == lastName) || (d.LastName ==  lastName) || (d.FirstName == firstName) || (d.FirstName == lastName) || (d.LastName == firstName)).Select(d => d.Id).FirstOrDefault();
            var findPatient = context.Patients.Where(p => p.DoctorId == id).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;

        }
    }
}
