using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Buffers.Text;
using System.Diagnostics.Metrics;
using System.IO;
using System.Runtime.ConstrainedExecution;
using System.Text;
using XAct.Library.Settings;
using XAct;

namespace MedicalApp.Service.NurseService
{
    public class PersonalDetailsService : IPersonalDetailsService
    {
        public readonly ApplicationDatabaseContext context;

        public PersonalDetailsService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public PersonalDetails AddPersonalDetails(PersonalDetailsDTO personalDetailsDTO)
        {
            var patient = new PersonalDetails()
            {
                DateOfBirth = personalDetailsDTO.DateOfBirth,
                MaritalStatus = personalDetailsDTO.MaritalStatus,
                Religion = personalDetailsDTO.Religion,
                IdentityNo = personalDetailsDTO.IdentityNo,
                Occupation = personalDetailsDTO.Occupation,
                Gender = personalDetailsDTO.Gender,
                Nationality = personalDetailsDTO.Nationality,
                Email = personalDetailsDTO.Email,
                Age = DateTime.Now.Year - personalDetailsDTO.DateOfBirth.Year
            };

            var patientId = context.Patients.FirstOrDefault(p => p.FirstName == personalDetailsDTO.FirstName && p.LastName == personalDetailsDTO.LastName);
            if (patientId != null)
            {
                patient.PatientId = patientId.Id;
                context.PersonalDetails.Add(patient);
                context.SaveChanges();
                return patient;
            }

            return null;
        }
    }

}
