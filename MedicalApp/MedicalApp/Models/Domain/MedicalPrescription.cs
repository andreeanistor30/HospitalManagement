using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalApp.Models.Domain
{
    public class MedicalPrescription
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Patient")]
        public Guid PatientId { get; set; }

        [Required]
        public string Medicine { get; set; }

        [Required]
        public string Route { get; set; }

        [Required]
        public string Instructions { get; set; }

        [Required]
        public string Dosage { get; set; }

        [Required]
        public int NoOfDays { get; set; }

    }
}
