﻿namespace MedicalApp.DataTransferObject
{
    public class PatientDiagnosticDTO
    {
        public double Weight { get; set; }

        public int RespiratoryRate { get; set; }

        public double BloodSugar { get; set; }

        public double Height { get; set; }

        public int HeartRate { get; set; }

        public double Temperature { get; set; }

        public double BloodPressure { get; set; }

        public string AllergyType { get; set; }

        public string Allergen { get; set; }

        public string Diagnostic { get; set; }

    }
}
