using MedicalApp.Models.Domain;
using MedicalApp.Service.NurseService;
using MedicalApp.Service.PatientService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("/nurseapi")]
    public class NurseController : ControllerBase
    {
        public readonly INurseService service;

        public NurseController(INurseService service)
        {
            this.service = service;
        }

        [HttpPut]

        public ActionResult UpdatePassword(string password, string firstName, string lastName)
        {
            var resp = service.ChangePassword(firstName, lastName, password);

            if (resp == true)
                return Ok();
            else
                return NotFound();
        }

    }
}
