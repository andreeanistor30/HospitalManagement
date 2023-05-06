using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
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

        [HttpGet]
        [Route("getall")]
        public ActionResult<PatientDTO> GetPatients()
        {
            var patients = service.GetAllPatients();

            if (patients != null)
                return Ok(patients);
            else
                return NotFound();
        }

        [HttpGet]
        [Route("getbypatientname")]

        public ActionResult<PatientDTOWrite> GetByName(string firstName, string lastName)
        {
            var patients = service.GetPatientByName(firstName, lastName);

            if (patients != null)
                return Ok(patients);
            else
                return NotFound();
        }

        [HttpGet]
        [Route("getbydoctorname")]

        public ActionResult<PatientDTOWrite> GetByDoctorName(string firstName, string lastName)
        {
            var patients = service.GetDoctorByName(firstName,lastName);

            if (patients != null)
                return Ok(patients);
            else
                return NotFound();
        }

        [HttpPost]
        [Route("addpatient")]
        public ActionResult<PatientDTOWrite> AddPatient(PatientDTO patientDTO)
        {
            var patient = service.AddPatient(patientDTO);

            if (patient != null)
                return Ok(patient);
            else
                return NotFound();
        }

        [HttpDelete]
        [Route("deletepatient")]
        public ActionResult DeletePatient(Guid id)
        {
            var patient = service.DeletePatient(id);

            if(patient != null)
                return Ok(patient);
            else
                return NotFound();
        }

        [HttpGet]
        [Route("getbyidentityno")]

        public ActionResult<Patient> GetByIdentityNo(string identityNo)
        {
            var patient = service.GetByIdentityNo(identityNo);
            if (patient != null)
                return Ok(patient);
            else 
                return NotFound();
        }

        [HttpGet]
        [Route("getanalysisResult")]

        public ActionResult<IEnumerable<AnalysisDTO>> GetAnalysisResult(string identityNo)
        {
            var results = service.GetResultsOfAPatient(identityNo);
            if (results != null)
                return Ok(results);
            else 
                return NotFound();
        }

        [HttpGet]
        [Route("getdetails")]
        
        public ActionResult<PatientDiagnosticDTO> GetDetails(string firstName,string lastName)
        {
            var results = service.GetPatientDiagnostics(firstName, lastName);
            if(results != null)
                return Ok(results);
            else
                return NotFound();
        }

    }
}
