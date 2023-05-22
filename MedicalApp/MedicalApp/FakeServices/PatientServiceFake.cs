using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using MedicalApp.Service.PatientService;
using System.Security.Cryptography;
using System.Text;

namespace MedicalApp.FakeServices
{
    public class PatientServiceFake :IPatientService
    {
        private readonly List<Doctor> doctors;
        private readonly List<Patient> patients;
        private readonly List<PersonalDetails> persDet;
        private readonly List<VitalSigns> vitalSign;

        public PatientServiceFake()
        {

            var vital = new VitalSigns()
            {
                PatientId = new Guid("48e5579e-6a2b-45e3-8ee0-b850a8decbdd"),
                Weight = 57,
                RespiratoryRate = 1,
                BloodSugar = 1,
                BloodPressure = 1,
                HeartRate = 1,
                Height = 168,
                Temperature = 1,
                AllergyType = "-",
                Allergen = "-"

            };

            patients = new List<Patient>()
            {
                new Patient()
                {
                    Id = new Guid("48e5579e-6a2b-45e3-8ee0-b850a8decbdd"),
                    DoctorId = new Guid("1d5c0fd4-7c80-47e8-9ba8-732baaccc681"),
                    FirstName = "Jane",
                    LastName = "Doe",
                    Username= "janedoe",
                    Password = "jane",
                    VitalSigns = vital,

                },

                new Patient()
                {
                    Id = new Guid("f98f22e6-e76f-45cf-ad52-bb6b522ffb32"),
                    DoctorId = new Guid("1d5c0fd4-7c80-47e8-9ba8-732baaccc681"),
                    FirstName = "Jannete",
                    LastName = "Doe",
                    Username= "jannetedoe",
                    Password = "jannete",

                }
            };

            doctors = new List<Doctor>()
            {
                new Doctor()
                {
                    Id = new Guid("1d5c0fd4-7c80-47e8-9ba8-732baaccc681"),
                    FirstName = "John",
                    LastName = "Doe",
                    DateOfBirth= DateTime.Now,
                    Address = "Address",
                    Phone = "0757849874",
                    UserName = "johndoe",
                    Password = "john",
                    Gender = "M",
                    Patients = patients

                }

            };

            persDet = new List<PersonalDetails>() {

                new PersonalDetails(){
                   Id = new Guid("8b49ce0a-4a52-4204-8e30-9c216dae27b1"),
                   IdentityNo = "XT",
                   PatientId = new Guid("48e5579e-6a2b-45e3-8ee0-b850a8decbdd"),
                }
            };

            vitalSign = new List<VitalSigns>() {

                new VitalSigns()
                {
                PatientId = new Guid("48e5579e-6a2b-45e3-8ee0-b850a8decbdd"),
                Weight = 57,
                RespiratoryRate = 0,
                BloodSugar = 0,
                BloodPressure = 0,
                HeartRate = 0,
                Height = 168,
                Temperature = 0,
                AllergyType = "-",
                Allergen = "-"
                }
            };


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

            patient.Password = HashPassword(patient.Password);
            var findDoctor = doctors.Where(d => d.FirstName == patientDTO.DoctorName).FirstOrDefault();
            if (findDoctor != null)
            {
                patient.DoctorId = findDoctor.Id;
                patients.Add(patient);
                return patient;
            }
            else return null;
        }

        public bool ChangePassword(string identityNo, string password)
        {
            var patientDet = persDet.Where(p => p.IdentityNo == identityNo).FirstOrDefault();

            if (patientDet != null)
            {
                var patient = patients.Where(p => p.Id == patientDet.PatientId).FirstOrDefault();
                patient.Password = HashPassword(password);
                return true;
            }
            else
                return false;
        }

        public Patient DeletePatient(Guid id)
        {
            var findPatient = patients.Where(p => p.Id == id).FirstOrDefault();

            if (findPatient != null)
            {
                patients.Remove(findPatient);
                return findPatient;
            }
            else
                return null;
        }

        public IEnumerable<PatientDTOWrite> GetAllPatients()
        {
            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < patients.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = patients.ElementAt(i).FirstName,
                    LastName = patients.ElementAt(i).LastName,
                    Diagnostic = patients.ElementAt(i).Diagnostic,
                    DoctorName = doctors.Where(d => d.Id == patients.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = patients.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }

        public Patient GetByIdentityNo(string identityNo)
        {
            var personalDetails = persDet
                                          .Where(p => p.IdentityNo.Equals(identityNo))
                                          .FirstOrDefault();
            if (personalDetails != null)
            {
                var patient = patients
                                      .Where(p => p.Id == personalDetails.PatientId)
                                      .FirstOrDefault();
                return patient;
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<PatientDTOWrite> GetDoctorByName(string firstName, string lastName)
        {
            var id = doctors.Where(d => (d.FirstName == firstName && d.LastName == lastName) || (d.LastName == firstName && d.FirstName == lastName) || (d.LastName == lastName) || (d.FirstName == firstName) || (d.FirstName == lastName) || (d.LastName == firstName)).Select(d => d.Id).FirstOrDefault();
            var findPatient = patients.Where(p => p.DoctorId == id).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }

        public IEnumerable<PatientDTOWrite> GetPatientByName(string firstName, string lastName)
        {
            var findPatient = patients.Where(p => (p.FirstName == firstName && p.LastName == lastName) || (p.LastName == firstName && p.FirstName == lastName) || (p.LastName == lastName) || (p.FirstName == firstName) || (p.FirstName == lastName) || (p.LastName == firstName)).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }

        public PatientDiagnosticDTO GetPatientDiagnostics(string firstName, string lastName)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AnalysisDTO> GetResultsOfAPatient(string identityNo)
        {
            throw new NotImplementedException();
        }

        private string HashPassword(string password)
        {
            using (var md5 = MD5.Create())
            {
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
                byte[] hashBytes = md5.ComputeHash(passwordBytes);
                return Convert.ToBase64String(hashBytes);
            }
        }
    }
}

