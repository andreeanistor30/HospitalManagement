using MedicalApp.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using XAct;

namespace MedicalApp.Service.DoctorService
{
    public class DoctorService:IDoctorService
    {
        public readonly ApplicationDatabaseContext context;

        public DoctorService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public Patient AddDetails(string diagnostic, string identityno)
        {
            var personalDetails = context.PersonalDetails.Where(p => p.IdentityNo.Equals(identityno)).FirstOrDefault();
            var patient = context.Patients.Where(p => p.Id == personalDetails.PatientId).FirstOrDefault();
            patient.Diagnostic = diagnostic;
            context.SaveChanges();
            return patient;
        }

        public IEnumerable<Patient> GetPatientsOfADoctor(string firstName, string lastName)
        {
            var patients = context.Patients.Include(p=>p.PersonalDetails).Where(d=>d.Doctor.FirstName==firstName && d.Doctor.LastName==lastName).ToList();
            return patients;
        }

        public bool ChangePassword(string phone, string password)
        {
            var nurse = context.Doctors.Where(n => n.Phone == phone).FirstOrDefault();

            if (nurse != null)
            {
                nurse.Password = HashPassword(password);
                context.SaveChanges();
                return true;

            }

            else
                return false;
        }

        public List<Doctor> GetDoctors()
        {
            return  context.Doctors.ToList();

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
