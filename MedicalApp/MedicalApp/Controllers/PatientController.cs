using MedicalApp.DataTransferObject;
using MedicalApp.Service.PatientService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("patientapi")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService service;

        public PatientController(IPatientService service)
        {
            this.service = service;
        }

        [HttpPost]
        public ActionResult<PatientDTO> AddPatient(PatientDTO patientDTO)
        {
            var patient = service.AddPatient(patientDTO);

            if (patient != null)
            {
                return Ok(patient);
            }
            else
                return NotFound();
        }
    }
}
