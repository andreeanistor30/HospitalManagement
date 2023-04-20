using MedicalApp.DataTransferObject;
using System.Text;
using XSystem.Security.Cryptography;

namespace MedicalApp.Service.NurseService
{
    public class NurseService:INurseService
    {
        public readonly ApplicationDatabaseContext context;

        public NurseService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public bool ChangePassword(string firstName, string lastName, string password)
        {
            var nurse = context.Nurses.Where(n=>n.FirstName == firstName && n.LastName == lastName).FirstOrDefault();

            if (nurse != null)
            {
                var passwordBytes = Encoding.ASCII.GetBytes(password);
                byte[] hashBytes;

                using (var md5 = new MD5CryptoServiceProvider())
                {
                    hashBytes = md5.ComputeHash(passwordBytes);
                }

                var hashString = Convert.ToBase64String(hashBytes);

                nurse.Password = hashString;
                context.SaveChanges();
                return true;

            }

            else
                return false;
        }
    }
}
