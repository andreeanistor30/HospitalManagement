using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Text;
using XSystem.Security.Cryptography;

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
            var passwordBytes = Encoding.ASCII.GetBytes(loginDTO.Password);
            byte[] hashBytes;

            using (var md5 = new MD5CryptoServiceProvider())
            {
                hashBytes = md5.ComputeHash(passwordBytes);
            }

            var passwordHash = Convert.ToBase64String(hashBytes);

            var doctor = context.Doctors.FirstOrDefault(u => u.UserName == loginDTO.Username && u.Password == passwordHash);

            if (doctor != null)
            {
                return doctor; // Login successful
            }
            else
            {
                return null; // Login failed
            }
        }
        public Patient LoginPatient(LoginDTO loginDTO)
        {
            var passwordBytes = Encoding.ASCII.GetBytes(loginDTO.Password);
            byte[] hashBytes;

            using (var md5 = new MD5CryptoServiceProvider())
            {
                hashBytes = md5.ComputeHash(passwordBytes);
            }

            var passwordHash = Convert.ToBase64String(hashBytes);

            var patient = context.Patients.FirstOrDefault(u => u.Username == loginDTO.Username && u.Password == passwordHash);

            if (patient != null)
            {
                return patient; // Login successful
            }
            else
            {
                return null; // Login failed
            }
        }

        public Nurse LoginNurse(LoginDTO loginDTO)
        {
            var passwordBytes = Encoding.ASCII.GetBytes(loginDTO.Password);
            byte[] hashBytes;

            using (var md5 = new MD5CryptoServiceProvider())
            {
                hashBytes = md5.ComputeHash(passwordBytes);
            }

            var passwordHash = Convert.ToBase64String(hashBytes);

            var nurse = context.Nurses.FirstOrDefault(u => u.UserName == loginDTO.Username && u.Password == passwordHash);

            if (nurse != null)
            {
                return nurse; // Login successful
            }
            else
            {
                return null; // Login failed
            }
        }

    }
}
