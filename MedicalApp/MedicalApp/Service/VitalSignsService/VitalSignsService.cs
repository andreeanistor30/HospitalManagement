using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.VitalSignsService
{
    public class VitalSignsService:IVitalSignsService
    {
        public readonly ApplicationDatabaseContext context;

        public VitalSignsService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public VitalSigns AddVitalSigns(VitalSignsDTO vitalSignsDTO)
        {
            var vitalSigns = new VitalSigns()
            {
                Weight = vitalSignsDTO.Weight,
                RespiratoryRate = vitalSignsDTO.RespiratoryRate,
                BloodSugar = vitalSignsDTO.BloodSugar,
                BloodPressure = vitalSignsDTO.BloodPressure,
                HeartRate = vitalSignsDTO.HeartRate,
                Height = vitalSignsDTO.Height,
                Temperature = vitalSignsDTO.Temperature,
                AllergyType = vitalSignsDTO.AllergyType,
                Allergen = vitalSignsDTO.Allergen
            };

            var findPatient = context.PersonalDetails.Where(p => p.IdentityNo == vitalSignsDTO.IdentityNo).FirstOrDefault();

            if (findPatient != null)
            {
                vitalSigns.PatientId = findPatient.PatientId;
                context.VitalSigns.Add(vitalSigns);
                context.SaveChanges();
                return vitalSigns;
            }
            else
                return null;
        }
    }
}
