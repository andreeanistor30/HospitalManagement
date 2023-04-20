using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.VitalSignsService
{
    public interface IVitalSignsService
    {
        public VitalSigns AddVitalSigns(VitalSignsDTO vitalSignsDTO);
    }
}
