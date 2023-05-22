using MedicalApp.Models.Domain;
using MedicalApp.Service.DoctorService;
using System.ComponentModel;
using System.Security.Cryptography;
using System.Text;

namespace MedicalApp.FakeServices
{
    public class DoctorServiceFake : IDoctorService
    {
        private readonly List<Doctor> doctors;
        private readonly List<Patient> patients;

        public DoctorServiceFake()
        {


            doctors = new List<Doctor>()
            {
                new Doctor()
                {
                    Id = new Guid("d76bbb16-7cc0-438e-b260-e846b9e34a90"),
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
            patients = new List<Patient>()
            {
                new Patient()
                {
                    Id = new Guid("e04c7205-e36b-48a6-bc27-21e5db7592c0"),
                    DoctorId = new Guid("d76bbb16-7cc0-438e-b260-e846b9e34a90"),
                    FirstName = "Jane",
                    LastName = "Doe",
                    Username= "janedoe",
                    Password = "jane"

                }
            };


        }


        public Patient AddDetails(string diagnostic, string identityno)
        {
            var doctor = doctors.FirstOrDefault();
            var personalDetails = new PersonalDetails()
            {
                IdentityNo = identityno,
            };

            if (doctor != null)
            {
                var patient = patients.FirstOrDefault();

                if (patient != null)
                {
                    patient.Diagnostic = diagnostic;
                    return patient;
                }
            }

            return null;
        }

        public bool ChangePassword(string phone, string password)
        {
            var doctor = doctors.Where(d => d.Phone == phone).FirstOrDefault();
            if (doctor != null)
            {
                var passw = HashPassword(doctor.Password);
                doctor.Password = password;
                return true;
            }
            else
                return false;

        }

        public List<Doctor> GetDoctors()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Patient> GetPatientsOfADoctor(string firstName, string lastName)
        {
            var doctor = doctors.Where(d => d.FirstName == firstName && d.LastName == lastName).FirstOrDefault();
            var list = patients.Where(p => p.DoctorId.Equals(doctor.Id)).ToList();
            return list;


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
