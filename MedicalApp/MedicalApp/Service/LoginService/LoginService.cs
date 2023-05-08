using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
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
            var passwordHash = HashPassword(loginDTO.Password);

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
            var passwordHash = HashPassword(loginDTO.Password);

            var patient = context.Patients.Include(p=>p.PersonalDetails).Include(p=>p.Results).FirstOrDefault(u => u.Username == loginDTO.Username && u.Password == passwordHash);

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
            var passwordHash = HashPassword(loginDTO.Password);

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

        public Admin LoginAdmin(LoginDTO loginDTO)
        {
            var passwordHash = HashPassword(loginDTO.Password);

            var admin = context.Admins.FirstOrDefault(u => u.UserName == loginDTO.Username && u.Password == passwordHash);

            if (admin != null)
            {
                return admin; // Login successful
            }
            else
            {
                return null; // Login failed
            }
        }

        private string HashPassword(string password)
        {
            using (var md5 = MD5.Create())
            {
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
                byte[] hashBytes = md5.ComputeHash(passwordBytes);
                return Convert.ToBase64String(hashBytes);
            }
        }

    }
}
