using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalApp.Models.Domain
{
    public class HomeAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [ForeignKey("Patient")]
        public Guid PatientId { get; set; }

        public virtual Patient Patient { get; set; } 

        public string City { get; set; }

        public string Address { get; set; }

        public string PostalCode { get; set; }

        public string District { get; set; }

        public string PhoneNumber { get; set; }
    }
}
