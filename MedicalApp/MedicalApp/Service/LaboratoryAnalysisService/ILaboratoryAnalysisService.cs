using MedicalApp.DataTransferObject;

namespace MedicalApp.Service.LaboratoryAnalysisService
{
    public interface ILaboratoryAnalysisService
    {
        public IEnumerable<LaboratoryAnalysisDTO> GetAll();
    }
}
