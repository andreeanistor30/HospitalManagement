using System.ComponentModel.DataAnnotations;

namespace MedicalApp.DataTransferObject
{
    public class MedicalPrescriptionDTO
    {
        public Guid PatientId { get; set; }

        public string Medicine { get; set; }

        public string Route { get; set; }

        public string Instructions { get; set; }

        public string Dosage { get; set; }

        public int NoOfDays { get; set; }
    }
}
