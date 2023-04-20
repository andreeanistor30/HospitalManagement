using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.AnalysisResultsService
{
    public class AnalysisResultsService:IAnalysisResultsService
    {
        public readonly ApplicationDatabaseContext context;

        public AnalysisResultsService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<AnalysisResults> InsertLaboratory(List<AnalysisResultsDTO> analysisResults, string identityNo)
        {
            var patientId = context.PersonalDetails.Where(p => p.IdentityNo == identityNo).Select(p => p.PatientId).FirstOrDefault();
            List<AnalysisResults> results = new List<AnalysisResults>();
            for (int i = 0; i < analysisResults.Count(); i++)
            {
                var id = context.LaboratoryAnalyses.Where(t => t.TestName == analysisResults[i].TestName).Select(t => t.Id).FirstOrDefault();

                var analysis = new AnalysisResults()
                {
                    PatientId = patientId,
                    AnalysisId = id,
                    Result = Double.Parse(analysisResults[i].Result)
                };
                context.Results.Add(analysis);
                context.SaveChanges();
                results.Add(analysis);
            }

            return results;


        }
    }
}
