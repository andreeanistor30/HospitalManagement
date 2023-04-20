using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedicalApp.Models.Domain
{
    public class AnalysisResults
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Patient")]
        public Guid PatientId { get; set; }

        [ForeignKey("LaboratoryAnalysis")]

        public Guid AnalysisId { get; set; }

        public double Result { get; set; }

        public LaboratoryAnalysis LaboratoryAnalysis { get; set; }


    }
}
