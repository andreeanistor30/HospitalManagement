using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Text;

namespace MedicalApp.Service.LoginService
{
    public class LoginService : ILoginService
    {
        public readonly ApplicationDatabaseContext context;

        public LoginService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public Doctor LoginDoctor(LoginDTO loginDTO)
        {
            var tmpSource = ASCIIEncoding.ASCII.GetBytes(loginDTO.Password);
            byte[] tmpNewHash;
            tmpNewHash = new XSystem.Security.Cryptography.MD5CryptoServiceProvider().ComputeHash(tmpSource);
            var hash = context.Doctors.Where(u => u.UserName == loginDTO.Username).FirstOrDefault();

            if (hash != null)
            {

                if (hash.Password.Equals(Convert.ToHexString(tmpNewHash)) == true)
                    return hash;
                else
                    return null;
            }

            else return null;
        }
        public Patient LoginPatient(LoginDTO loginDTO)
        {
            var tmpSource = ASCIIEncoding.ASCII.GetBytes(loginDTO.Password);
            byte[] tmpNewHash;
            tmpNewHash = new XSystem.Security.Cryptography.MD5CryptoServiceProvider().ComputeHash(tmpSource);
            var hash = context.Patients.Where(u => u.Username == loginDTO.Username).FirstOrDefault();

            if (hash != null)
            {

                if (hash.Password.Equals(Convert.ToHexString(tmpNewHash)) == true)
                    return hash;
                else
                    return null;
            }

            else return null;
        }

        public Nurse LoginNurse(LoginDTO loginDTO)
        {
            var tmpSource = ASCIIEncoding.ASCII.GetBytes(loginDTO.Password);
            byte[] tmpNewHash;
            tmpNewHash = new XSystem.Security.Cryptography.MD5CryptoServiceProvider().ComputeHash(tmpSource);
            var hash = context.Nurses.Where(u => u.UserName == loginDTO.Username).FirstOrDefault();

            if (hash != null)
            {

                if (hash.Password.Equals(Convert.ToHexString(tmpNewHash)) == true)
                    return hash;
                else
                    return null;
            }

            else return null;
        }

    }
}
