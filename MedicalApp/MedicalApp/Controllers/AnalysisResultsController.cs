using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using MedicalApp.Service.AnalysisResultsService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("/analysisResults")]
    public class AnalysisResultsController: ControllerBase
    {
        public readonly IAnalysisResultsService service;

        public AnalysisResultsController(IAnalysisResultsService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("/insertResults")]

        public ActionResult<IEnumerable<AnalysisResults>> AddAnalysisResults(List<AnalysisResultsDTO> analysisResults, string identityNo)
        {
            var analysis = service.InsertLaboratory(analysisResults, identityNo);

            if (analysis != null)
                return Ok(analysis);
            else
                return NotFound(analysis);
        }
    }
}
