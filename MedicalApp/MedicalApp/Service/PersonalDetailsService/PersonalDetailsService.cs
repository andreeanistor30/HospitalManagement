using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

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

            var patientId = context.Patients.Where(p => p.FirstName == personalDetailsDTO.FirstName && p.LastName == personalDetailsDTO.LastName).FirstOrDefault();
            if (patientId != null)
            {
                patient.PatientId = patientId.Id;
                context.PersonalDetails.Add(patient);
                context.SaveChanges();
                return patient;
            }
            else return null;
        }
    }
}
