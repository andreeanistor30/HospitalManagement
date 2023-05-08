using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using System.Security.Cryptography;
using System.Text;

namespace MedicalApp.Service.AdminService
{
    public class AdminService:IAdminService
    {
        private readonly ApplicationDatabaseContext context;

        public AdminService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }

        public NurseDTO AddNurse(NurseDTO nurseDTO)
        {
            Nurse nurse = new Nurse()
            {
                FirstName= nurseDTO.FirstName,
                LastName= nurseDTO.LastName,
                DateOfBirth= nurseDTO.DateOfBirth,
                Address = nurseDTO.Address,
                Phone = nurseDTO.Phone,
                UserName= nurseDTO.UserName,
                Password= HashPassword(nurseDTO.Password),
                Gender = nurseDTO.Gender
            };
            context.Nurses.Add(nurse);
            context.SaveChanges();
            return nurseDTO;
        }

        public DoctorDTO AddDoctor(DoctorDTO doctorDTO)
        {
            Doctor doctor = new Doctor()
            {
                FirstName = doctorDTO.FirstName,
                LastName = doctorDTO.LastName,
                DateOfBirth = doctorDTO.DateOfBirth,
                Address = doctorDTO.Address,
                Phone = doctorDTO.Phone,
                UserName= doctorDTO.UserName,
                Password = HashPassword(doctorDTO.Password),
                Gender = doctorDTO.Gender
            };
            context.Doctors.Add(doctor);
            context.SaveChanges();
            return doctorDTO;
        }

        public AdminDTO AddAdmin(AdminDTO adminDTO)
        {
            Admin admin = new Admin()
            {
                UserName = adminDTO.UserName,
                Password = HashPassword(adminDTO.Password)
            };

            context.Admins.Add(admin);
            context.SaveChanges();
            return adminDTO;
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
