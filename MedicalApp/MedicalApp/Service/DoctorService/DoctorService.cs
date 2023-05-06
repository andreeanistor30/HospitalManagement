using MedicalApp.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;
using XAct;
using XSystem.Security.Cryptography;

namespace MedicalApp.Service.DoctorService
{
    public class DoctorService:IDoctorService
    {
        public readonly ApplicationDatabaseContext context;

        public DoctorService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public Patient AddDetails(string diagnostic, string treatment, string identityno)
        {
            var personalDetails = context.PersonalDetails.Where(p => p.IdentityNo.Equals(identityno)).FirstOrDefault();
            var patient = context.Patients.Where(p => p.Id == personalDetails.PatientId).FirstOrDefault();
            patient.Diagnostic = diagnostic;
            patient.Treatment = treatment;
            context.SaveChanges();
            return patient;
        }

        public IEnumerable<Patient> GetPatientsOfADoctor(string firstName, string lastName)
        {
            var patients = context.Patients.Include(p=>p.PersonalDetails).Where(d=>d.Doctor.FirstName==firstName && d.Doctor.LastName==lastName).ToList();
            return patients;
        }

        public bool ChangePassword(string firstName, string lastName, string password)
        {
            var nurse = context.Doctors.Where(n => n.FirstName == firstName && n.LastName == lastName).FirstOrDefault();

            if (nurse != null)
            {
                var passwordBytes = Encoding.ASCII.GetBytes(password);
                byte[] hashBytes;

                using (var md5 = new MD5CryptoServiceProvider())
                {
                    hashBytes = md5.ComputeHash(passwordBytes);
                }

                var hashString = Convert.ToBase64String(hashBytes);

                nurse.Password = hashString;
                context.SaveChanges();
                return true;

            }

            else
                return false;
        }

    }
}
