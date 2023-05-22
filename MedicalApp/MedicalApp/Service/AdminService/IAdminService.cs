using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.AdminService
{
    public interface IAdminService
    {
        public NurseDTO AddNurse(NurseDTO nurseDTO);

        public DoctorDTO AddDoctor(DoctorDTO doctorDTO);

        public AdminDTO AddAdmin(AdminDTO adminDTO);
        public bool RemoveDoctorOrNurse(string identityNo, string type);
    }
}
