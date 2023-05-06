using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using MedicalApp.Service.NurseService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("personalDetails")]
    public class PersonalDetailsController : ControllerBase
    {
        public readonly IPersonalDetailsService service;

        public PersonalDetailsController(IPersonalDetailsService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("/addPersonalDetails")]
        public ActionResult<PersonalDetails> InsertPersonalDetails(PersonalDetailsDTO personalDetails)
        {
            var details = service.AddPersonalDetails(personalDetails);

            if (details != null)
            {
                return Ok(details);
            }
            else
                return NotFound();
        }

    }
}
