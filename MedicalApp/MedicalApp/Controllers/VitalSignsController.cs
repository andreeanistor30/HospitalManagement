using MedicalApp.DataTransferObject;
using MedicalApp.Service.VitalSignsService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("vitalSigns")]
    public class VitalSignsController : ControllerBase
    {
        public readonly IVitalSignsService service;

        public VitalSignsController(IVitalSignsService service)
        {
            this.service = service;
        }

        [HttpPost]
        public ActionResult<VitalSignsDTO> AddVitalSigns(VitalSignsDTO vitalSignsDTO)
        {
            var vitalSigns = service.AddVitalSigns(vitalSignsDTO);

            if (vitalSigns != null)
            {
                return Ok(vitalSigns);
            }
            else
                return NotFound();
        }
    }
}
