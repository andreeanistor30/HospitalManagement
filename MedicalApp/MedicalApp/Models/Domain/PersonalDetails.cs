using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace MedicalApp.Models.Domain
{
    public class PersonalDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Patient")]
        public Guid PatientId { get; set; }

        public virtual Patient Patient { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string MaritalStatus { get; set; }

        public string Religion { get; set; }

        public string IdentityNo { get; set; }

        public string Occupation { get; set; }

        public string Gender { get; set; }

        public string Nationality { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }

    }
}
