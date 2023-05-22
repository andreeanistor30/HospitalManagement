using MedicalApp.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace MedicalApp
{
    public class ApplicationDatabaseContext:DbContext
    {
        public readonly DbContextOptions _options;

        public ApplicationDatabaseContext()
        {

        }

        public ApplicationDatabaseContext(DbContextOptions options)
        {
            _options = options;
        }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Nurse> Nurses { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<LaboratoryAnalysis> LaboratoryAnalyses { get; set; }

        public DbSet<PersonalDetails> PersonalDetails { get; set; }

        public DbSet<HomeAddress> HomeAddresses { get; set; }

        public DbSet<VitalSigns> VitalSigns { get; set; }

        public DbSet<AnalysisResults> Results { get; set; } 

        public DbSet<Admin> Admins { get; set; }

        public DbSet<MedicalPrescription> MedicalPrescriptions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=ANDREEA\\SQLEXPRESS;Database=HospitalDB;Trusted_Connection=True;TrustServerCertificate=True");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
