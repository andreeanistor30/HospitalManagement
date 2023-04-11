using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.HomeAddressService
{
    public class HomeAddressService:IHomeAddressService
    {
        public readonly ApplicationDatabaseContext context;

        public HomeAddressService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public HomeAddress AddHomeAddress(HomeAddressDTO homeAddressDTO)
        {
            var homeAddress = new HomeAddress
            {
                City= homeAddressDTO.City,
                District= homeAddressDTO.District,
                Address= homeAddressDTO.Address,
                PhoneNumber= homeAddressDTO.PhoneNumber,
                PostalCode= homeAddressDTO.PostalCode
            };

            var patientId = context.Patients.Where(p => p.FirstName == homeAddressDTO.FirstName && p.LastName == homeAddressDTO.LastName).FirstOrDefault();
            if (patientId != null)
            {
                homeAddress.PatientId = patientId.Id;
                context.HomeAddresses.Add(homeAddress);
                context.SaveChanges();
                return homeAddress;
            }

            else
                return null;
        }
    }
}
