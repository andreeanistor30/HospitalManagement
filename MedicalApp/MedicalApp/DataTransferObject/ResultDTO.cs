using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalApp.DataTransferObject
{
    public class ResultDTO
    {
        public Guid PatientId { get; set; }

        public Guid AnalysisId { get; set; }

        public double Result { get; set; }
    }
}
