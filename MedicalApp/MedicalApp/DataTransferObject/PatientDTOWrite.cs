namespace MedicalApp.DataTransferObject
{
    public class PatientDTOWrite
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string DoctorName { get; set; }

        public string Diagnostic { get; set; }
    }
}
