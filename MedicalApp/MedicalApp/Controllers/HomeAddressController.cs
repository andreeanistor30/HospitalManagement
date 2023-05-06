using MedicalApp.DataTransferObject;
using MedicalApp.Service.HomeAddressService;
using MedicalApp.Service.PatientService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("/homeAddress")]
    public class HomeAddressController : ControllerBase
    {
        private readonly IHomeAddressService service;

        public HomeAddressController(IHomeAddressService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("/addHomeAddress")]
        public ActionResult<HomeAddressDTO> AddHomeAddress(HomeAddressDTO homeAddressDTO)
        {
            var homeAddress = service.AddHomeAddress(homeAddressDTO);

            if (homeAddress != null)
            {
                return Ok(homeAddress);
            }
            else
                return NotFound();
        }
    }
}
