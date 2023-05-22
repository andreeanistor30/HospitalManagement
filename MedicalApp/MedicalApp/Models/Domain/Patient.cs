using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedicalApp.Models.Domain
{
    public class Patient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Doctor")]
        public Guid DoctorId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public virtual Doctor Doctor { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string Diagnostic { get; set; }

        public string Treatment { get; set; }

        public PersonalDetails PersonalDetails { get; set; }

        public HomeAddress HomeAddress { get; set; }

        public VitalSigns VitalSigns { get; set; }

        public IEnumerable<AnalysisResults> Results { get; set; }

        public virtual ICollection<MedicalPrescription> MedicalPrescriptions { get; set; }

    }
}
