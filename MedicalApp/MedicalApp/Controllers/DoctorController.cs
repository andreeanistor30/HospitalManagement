using MedicalApp.Models.Domain;
using MedicalApp.Service.DoctorService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("doctorapi")]
    public class DoctorController : ControllerBase
    {
        public readonly IDoctorService service;

        public DoctorController(IDoctorService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("addDiagnostic")]
        public ActionResult<Patient> InsertDiagnostic(string diagnostic, string treatment, string identityno)
        {
            var patient = service.AddDetails(diagnostic, treatment, identityno);

            if (patient != null) return Ok(patient);
            else return NotFound();
        }

        [HttpGet]
        [Route("getpatientsByDoctorName")]
        public ActionResult<IEnumerable<Patient>> GetPatients(string firstName, string lastName)
        {
            var patients = service.GetPatientsOfADoctor(firstName, lastName);

            if (patients != null) return Ok(patients);
            else return NotFound();
           
        }

        [HttpPut]
        public ActionResult UpdatePassword(string password, string phone)
        {
            var resp = service.ChangePassword(phone, password);

            if (resp == true)
                return Ok();
            else
                return NotFound();
        }
    }
}
