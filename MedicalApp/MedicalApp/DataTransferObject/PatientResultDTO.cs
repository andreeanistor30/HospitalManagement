namespace MedicalApp.DataTransferObject
{
    public class PatientResultDTO
    {
        public string TestName { get; set; }

        public double Result { get; set; }

        public string Range { get; set; }

        public string Units { get; set; }
    }
}
