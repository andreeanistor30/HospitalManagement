using MedicalApp.DataTransferObject;
using MedicalApp.Models.Domain;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using XAct;

namespace MedicalApp.Service.PatientService
{
    public class PatientService:IPatientService
    {
        public readonly ApplicationDatabaseContext context;

        public PatientService(ApplicationDatabaseContext context)
        {
            this.context = context;
        }
        
        public IEnumerable<PatientDTOWrite> GetAllPatients()
        {
            IEnumerable<Patient> patients = context.Patients.ToList();
            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i=0;i<patients.Count();i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = patients.ElementAt(i).FirstName,
                    LastName = patients.ElementAt(i).LastName,
                    Diagnostic = patients.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d=>d.Id==patients.ElementAt(i).DoctorId).Select(d=>d.FirstName).First(),
                    Id = patients.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }
        public Patient AddPatient(PatientDTO patientDTO)
        {

            var patient = new Patient()
            {
                FirstName = patientDTO.FirstName,
                LastName = patientDTO.LastName,
                Username = patientDTO.FirstName + patientDTO.LastName,
                Password = patientDTO.FirstName,
                Diagnostic = "-",
                Treatment = "-"
            };

            patient.Password = HashPassword(patient.Password);
            var findDoctor = context.Doctors.Where(d => d.FirstName == patientDTO.DoctorName).FirstOrDefault();
            if (findDoctor != null)
            {
                patient.DoctorId = findDoctor.Id;
                context.Add(patient);
                context.SaveChanges();
                return patient;
            }
            else return null;
            
        }

        public Patient DeletePatient(Guid id)
        {
            var findPatient = context.Patients.Where(p => p.Id == id).FirstOrDefault();

            if (findPatient != null)
            {
                context.Patients.Remove(findPatient);
                context.SaveChanges();
                return findPatient;
            }
            else
                return null;
        }

        public IEnumerable<PatientDTOWrite> GetPatientByName(string firstName, string lastName)
        {
            var findPatient = context.Patients.Where(p => (p.FirstName == firstName && p.LastName == lastName) || (p.LastName == firstName && p.FirstName == lastName)||(p.LastName == lastName)||(p.FirstName == firstName)||(p.FirstName == lastName)||(p.LastName == firstName)).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;
        }

        public IEnumerable<PatientDTOWrite> GetDoctorByName(string firstName,string lastName)
        {
            var id = context.Doctors.Where(d => (d.FirstName == firstName && d.LastName == lastName) || (d.LastName == firstName && d.FirstName == lastName) || (d.LastName ==  lastName) || (d.FirstName == firstName) || (d.FirstName == lastName) || (d.LastName == firstName)).Select(d => d.Id).FirstOrDefault();
            var findPatient = context.Patients.Where(p => p.DoctorId == id).ToList();

            List<PatientDTOWrite> list = new List<PatientDTOWrite>();
            for (int i = 0; i < findPatient.Count(); i++)
            {
                var patient = new PatientDTOWrite()
                {
                    FirstName = findPatient.ElementAt(i).FirstName,
                    LastName = findPatient.ElementAt(i).LastName,
                    Diagnostic = findPatient.ElementAt(i).Diagnostic,
                    DoctorName = context.Doctors.Where(d => d.Id == findPatient.ElementAt(i).DoctorId).Select(d => d.FirstName).First(),
                    Id = findPatient.ElementAt(i).Id
                };
                list.Add(patient);
            }
            return list;

        }

        public Patient GetByIdentityNo(string identityNo)
        {
            var personalDetails = context.PersonalDetails
                                           .Where(p => p.IdentityNo.Equals(identityNo))
                                           .FirstOrDefault();
            if (personalDetails != null)
            {
                var patient = context.Patients
                                      .Include(p => p.VitalSigns)
                                      .Where(p => p.Id == personalDetails.PatientId)
                                      .FirstOrDefault();
                return patient;
            }
            else
            {
                return null;
            }
        }

            public IEnumerable<AnalysisDTO> GetResultsOfAPatient(string identityNo)
        {
            var patientId = context.PersonalDetails.Where(p => p.IdentityNo == identityNo).Select(p=>p.PatientId).FirstOrDefault();
            var result = context.Results.Where(r=>r.PatientId == patientId).ToList();
            var values= new List<AnalysisDTO>();
            for(int i = 0; i < result.Count(); i++)
            {
                var analysis = context.LaboratoryAnalyses.Where(l => l.Id == result[i].AnalysisId).FirstOrDefault();
                AnalysisDTO analysisDTO = new AnalysisDTO
                {
                    Result = result[i].Result,
                    TestName = analysis.TestName,
                    Range = analysis.ReferenceRange

                };
                values.Add(analysisDTO);
            }
            return values;
        }

        public PatientDiagnosticDTO GetPatientDiagnostics(string firstName, string lastName)
        {
            var patientId = context.Patients.Where(p=>p.FirstName== firstName && p.LastName == lastName).FirstOrDefault();
            var vitalSigns = context.VitalSigns.Where(v => v.PatientId == patientId.Id).FirstOrDefault();
            

            PatientDiagnosticDTO patient = new PatientDiagnosticDTO()
            {
                Weight = vitalSigns.Weight,
                RespiratoryRate = vitalSigns.RespiratoryRate,
                BloodPressure= vitalSigns.BloodPressure,
                BloodSugar = vitalSigns.BloodSugar,
                HeartRate = vitalSigns.HeartRate,
                Temperature = vitalSigns.Temperature,
                Height = vitalSigns.Height,
                Allergen = vitalSigns.Allergen,
                AllergyType = vitalSigns.AllergyType,
                Diagnostic = patientId.Diagnostic
            };

            return patient;
        }

        public bool ChangePassword(string identityNo, string password)
        {
            var persDetails = context.PersonalDetails.Where(p => p.IdentityNo == identityNo).FirstOrDefault();
            if (persDetails != null)
            {
                var patient = context.Patients.Where(p => p.Id == persDetails.PatientId).FirstOrDefault();
                patient.Password = HashPassword(password);
                context.SaveChanges();
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
