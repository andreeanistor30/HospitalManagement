﻿using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;

namespace MedicalApp.Service.PatientService
{
    public interface IPatientService
    {
        public IEnumerable<PatientDTOWrite> GetAllPatients();

        public Patient AddPatient(PatientDTO patientDTO);

        public Patient DeletePatient(Guid id);

        public IEnumerable<PatientDTOWrite> GetPatientByName(string firstName, string lastName);

        public IEnumerable<PatientDTOWrite> GetDoctorByName(string firstName, string lastName);
    }
}
