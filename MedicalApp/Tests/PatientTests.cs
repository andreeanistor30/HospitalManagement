using MedicalApp.Controllers;
using MedicalApp.DataTransferObject;
using MedicalApp.FakeServices;
using MedicalApp.Models.Domain;
using MedicalApp.Service.PatientService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tests
{
    internal class PatientTests: IPatientService
    {
        public readonly PatientController controller;
        public readonly IPatientService service;

        public PatientTests()
        {
            service = new PatientServiceFake();
            controller = new PatientController(service);
        }

        [Test]
        public void AddPatient()
        {

            PatientDTO patientDTO = new PatientDTO()
            {
                FirstName = "Test",
                LastName = "Test2",
                DoctorName = "Dr. John"
            };

            var okResult = controller.AddPatient(patientDTO);

            Assert.That(okResult is ActionResult<PatientDTOWrite>, Is.True);

        }

        [Test]

        public void ChangePassword()
        {

            var password = "password";
            var identityNo = "XT";

            var okResult = controller.UpdatePassword(password, identityNo);

            Assert.That(okResult is OkResult, Is.True);

        }

        [Test]

        public void DeletePatient()
        {
            var id = new Guid("f98f22e6-e76f-45cf-ad52-bb6b522ffb32");

            var okResult = controller.DeletePatient(id);

            Assert.That(okResult is ActionResult, Is.True);
        }


        [Test]

        public void GetAllPatients()
        {

            var okResult = controller.GetPatients();

            Assert.That(okResult is ActionResult<PatientDTO>, Is.True);

        }


        [Test]

        public void GetPatientById()
        {
            var identityNo = "XT";

            var okResult = controller.GetByIdentityNo(identityNo);

            Assert.That(okResult is ActionResult<Patient>, Is.True);


        }

        [Test]

        public void GetPatientByDoctorName()
        {
            var firstName = "John";
            var lastName = "Doe";

            var okResult = controller.GetByDoctorName(firstName, lastName);


            Assert.That(okResult is ActionResult<PatientDTOWrite>, Is.True);

        }


        [Test]

        public void GetPatientByName()
        {
            var firstName = "Jane";
            var lastName = "Doe";

            var okResult = controller.GetByName(firstName, lastName);


            Assert.That(okResult is ActionResult<PatientDTOWrite>, Is.True);

        }

        IEnumerable<PatientDTOWrite> IPatientService.GetAllPatients()
        {
            throw new NotImplementedException();
        }

        public Patient AddPatient(PatientDTO patientDTO)
        {
            throw new NotImplementedException();
        }

        public Patient DeletePatient(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PatientDTOWrite> GetPatientByName(string firstName, string lastName)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PatientDTOWrite> GetDoctorByName(string firstName, string lastName)
        {
            throw new NotImplementedException();
        }

        public Patient GetByIdentityNo(string identityNo)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AnalysisDTO> GetResultsOfAPatient(string identityNo)
        {
            throw new NotImplementedException();
        }

        public PatientDiagnosticDTO GetPatientDiagnostics(string firstName, string lastName)
        {
            throw new NotImplementedException();
        }

        public bool ChangePassword(string identityNo, string password)
        {
            throw new NotImplementedException();
        }
    }
}
