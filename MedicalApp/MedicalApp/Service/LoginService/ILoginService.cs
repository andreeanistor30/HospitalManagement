using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.LoginService
{
    public interface ILoginService
    {
        public Patient LoginPatient(LoginDTO patientDTO);

        public Doctor LoginDoctor(LoginDTO doctorDTO);

        public Nurse LoginNurse(LoginDTO nurseDTO);

        public Admin LoginAdmin(LoginDTO adminDTO);
    }
}
