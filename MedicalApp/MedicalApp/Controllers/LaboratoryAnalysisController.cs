using MedicalApp.DataTransferObject;
using MedicalApp.Service.LaboratoryAnalysisService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("laboratoryAnalysis")]
    public class LaboratoryAnalysisController : Controller
    {
        public readonly ILaboratoryAnalysisService service;

        public LaboratoryAnalysisController(ILaboratoryAnalysisService service)
        {
            this.service = service;
        }

        [HttpGet]
        [Route("getall")]
        public ActionResult<LaboratoryAnalysisDTO> GetPatients()
        {
            var patients = service.GetAll();

            if (patients != null)
                return Ok(patients);
            else
                return NotFound();
        }

        
    }
}
