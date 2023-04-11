using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.NurseService
{
    public interface IPersonalDetailsService
    {
        public PersonalDetails AddPersonalDetails(PersonalDetailsDTO personalDetailsDTO);
    }
}
