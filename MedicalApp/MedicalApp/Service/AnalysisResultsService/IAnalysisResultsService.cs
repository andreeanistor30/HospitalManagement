using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.AnalysisResultsService
{
    public interface IAnalysisResultsService
    {
        public IEnumerable<AnalysisResults> InsertLaboratory(List<AnalysisResultsDTO> analysisResults, string identityNo);
    }
}
