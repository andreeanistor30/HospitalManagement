using MedicalApp.DataTransferObject;
using System.Security.Cryptography;
using System.Text;
namespace MedicalApp.Service.NurseService
{
    public class NurseService:INurseService
    {
        public readonly ApplicationDatabaseContext context;

        public NurseService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public bool ChangePassword(string phone, string password)
        {
            var nurse = context.Nurses.Where(n=>n.Phone == phone).FirstOrDefault();

            if (nurse != null)
            { 
                nurse.Password = HashPassword(password);
                context.SaveChanges();
                return true;

            }

            else
                return false;
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
