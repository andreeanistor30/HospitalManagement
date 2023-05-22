using MedicalApp.Models.Domain;
using MedicalApp.Service.MedicalPrescriptionService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("medicalprescription")]
    public class MedicalPrescriptionController : ControllerBase
    {
        public readonly IMedicalPrescriptionService service;

        public MedicalPrescriptionController(IMedicalPrescriptionService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("addMedicalPrescription")]
        public ActionResult<MedicalPrescription> addMedicalPrescription(string identityno, string medicine, string route, string dosage, int noofdays, string instruction)
        {
            var response = service.AddPrescription(identityno,medicine,route, dosage, noofdays, instruction);

            if (response != null)
                return Ok(response);
            else
                return NotFound(response);
        }

        [HttpGet]
        [Route("getMedicalPrescription")]
        public ActionResult<List<MedicalPrescription>> getMedicalPrescription(string identityNo)
        {
            var response = service.GetMedicalPrescriptions(identityNo);

            if (response != null) return Ok(response);
            else
                return NotFound();
        }
    }
}
