using MedicalApp.Controllers;
using MedicalApp.FakeServices;
using MedicalApp.Models.Domain;
using MedicalApp.Service.DoctorService;
using Microsoft.AspNetCore.Mvc;

namespace Tests
{
    public class DoctorTests
    {
        public readonly DoctorController controller;
        public readonly IDoctorService service;

        public DoctorTests()
        {
            service = new DoctorServiceFake();
            controller = new DoctorController(service);
        }

        [Test]
        public void ChangePassword()
        {
            var password = "password";
            var phone = "0757849874";

            var okResult = controller.UpdatePassword(password, phone);

            Assert.That(okResult is OkResult, Is.True);

        }

        [Test]
       public void GetPatientOfADoctor()
        {
            var okResult = controller.GetPatients("John", "Doe");

            Assert.That(okResult is ActionResult<IEnumerable<Patient>>, Is.True);
        }
    }
}