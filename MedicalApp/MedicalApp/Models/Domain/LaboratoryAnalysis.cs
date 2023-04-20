using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedicalApp.Models.Domain
{
    public class LaboratoryAnalysis
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string TestName { get; set; }

        public string Units { get; set; }

        public string ReferenceRange { get; set; }

        public IEnumerable<AnalysisResults> Laboratories { get; set; }
    }
}
