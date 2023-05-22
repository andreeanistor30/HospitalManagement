using MedicalApp.Models.Domain;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Service.DoctorService
{
    public interface IDoctorService
    {
        public Patient AddDetails(string diagnostic, string identityno);
        public IEnumerable<Patient> GetPatientsOfADoctor(string firstName, string lastName);
        public bool ChangePassword(string phone, string password);

        public List<Doctor> GetDoctors();
    }
}
