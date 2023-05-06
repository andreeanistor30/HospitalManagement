using MedicalApp.DataTransferObject;
using MedicalApp.Service.LoginService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService service;

        public LoginController(ILoginService service)
        {
            this.service = service;
        }

        [HttpPost("patient")]
        [AllowAnonymous]

        public ActionResult<LoginDTO> LoginPatient(LoginDTO userDTO)
        {
            var patient = service.LoginPatient(userDTO);

            if (patient == null)
                return BadRequest();
            else
                return Ok(patient);

        }

        [HttpPost("doctor")]
        [AllowAnonymous]

        public ActionResult<LoginDTO> LoginDoctor(LoginDTO userDTO)
        {
            var doctor = service.LoginDoctor(userDTO);

            if (doctor == null)
                return BadRequest();
            else
                return Ok(doctor);
        }

        [HttpPost("nurse")]
        [AllowAnonymous]

        public ActionResult<LoginDTO> LoginNurse(LoginDTO userDTO)
        {
            var nurse = service.LoginNurse(userDTO);

            if (nurse == null)
                return BadRequest();
            else
                return Ok(nurse);
        }
    }
}
