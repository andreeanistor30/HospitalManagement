using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.HomeAddressService
{
    public interface IHomeAddressService
    {
        public HomeAddress AddHomeAddress(HomeAddressDTO homeAddressDTO);

    }
}
