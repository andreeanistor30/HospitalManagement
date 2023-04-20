using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Reflection;

namespace MedicalApp.Service.LaboratoryAnalysisService
{
    public class LaboratoryAnalysisService:ILaboratoryAnalysisService
    {
        public readonly ApplicationDatabaseContext context;

        public LaboratoryAnalysisService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<LaboratoryAnalysisDTO> GetAll()
        {
            IEnumerable<LaboratoryAnalysis> laboratory = context.LaboratoryAnalyses.ToList();
            List<LaboratoryAnalysisDTO> list = new List<LaboratoryAnalysisDTO>();
            for (int i = 0; i < laboratory.Count(); i++)
            {
                var analysis = new LaboratoryAnalysisDTO()
                {
                    TestName = laboratory.ElementAt(i).TestName,
                    Units = laboratory.ElementAt(i).Units,
                    ReferenceRange = laboratory.ElementAt(i).ReferenceRange
                };
                list.Add(analysis);
            }
            return list;

        }

    }
}
