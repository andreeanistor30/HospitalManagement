using MedicalApp.Models.Domain;
using MedicalApp.Service.NurseService;
using System.Security.Cryptography;
using System.Text;

namespace MedicalApp.FakeServices
{
        public class NurseServiceFake : INurseService
        {
            private readonly List<Nurse> nurses;
            public NurseServiceFake()
            {
                nurses = new List<Nurse>
            {
                new Nurse(){
                    FirstName ="Jane",
                    LastName = "Doe",
                    DateOfBirth = DateTime.Now,
                    Address = "Everywhere",
                    Phone = "0722",
                    UserName = "janedoe",
                    Password="password",
                    Gender="female",
                }
            };
            }
            public bool ChangePassword(string phone, string password)
            {
                var nurse = nurses.Where(n => n.Phone == phone).FirstOrDefault();

                if (nurse != null)
                {
                    nurse.Password = HashPassword(password);
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

