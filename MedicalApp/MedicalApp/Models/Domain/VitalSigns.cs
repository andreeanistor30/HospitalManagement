using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedicalApp.Models.Domain
{
    public class VitalSigns
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Patient")]

        public Guid PatientId { get; set; }

        public Patient Patient { get; set; }

        public double Weight { get; set; }

        public int RespiratoryRate { get; set; }

        public double BloodSugar { get; set; }

        public double Height { get; set; }

        public int HeartRate { get; set; }

        public double Temperature { get; set; }

        public double BloodPressure { get; set; }

        public string AllergyType { get; set; }

        public string Allergen { get; set; }

    }
}
