using MedicalApp.DataTransferObject;
using MedicalApp.Service.AdminService;
using Microsoft.AspNetCore.Mvc;

namespace MedicalApp.Controllers
{
    [ApiController]
    [Route("adminApi")]
    public class AdminController : ControllerBase
    {
        public readonly IAdminService service;
        
        public AdminController(IAdminService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("addNurse")]
        public ActionResult<NurseDTO> AddNurse(NurseDTO nurseDTO)
        {
            var nurse = service.AddNurse(nurseDTO);
            if (nurse != null)
                return Ok(nurseDTO);
            else 
                return NotFound(nurseDTO);

        }

        [HttpPost]
        [Route("addDoctor")]
        public ActionResult<DoctorDTO> AddDoctor(DoctorDTO doctorDTO)
        {
            var doctor = service.AddDoctor(doctorDTO);
            if (doctor != null)
                return Ok(doctorDTO);
            else
                return NotFound(doctorDTO);
        }

        [HttpPost]
        [Route("addAdmin")]
        public ActionResult<AdminDTO> AddAdmin(AdminDTO adminDTO)
        {
            var admin = service.AddAdmin(adminDTO);
            if (admin != null)
                return Ok(adminDTO);
            else 
                return NotFound(adminDTO);
        }
        


    }
}
