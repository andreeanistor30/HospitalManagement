using MedicalApp.Controllers;
using MedicalApp.Service.NurseService;
using MedicalApp.FakeServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Tests
{
    public class NurseTests
    {
        public readonly NurseController controller;
        public readonly INurseService service;


        public NurseTests() {
            service = new NurseServiceFake();
            controller = new NurseController(service);
        }


        [Test]
        public void ChangePassword()
        {

            var phone = "0722";
            var password = "newpass";

            var okResult = controller.UpdatePassword(password, phone);

            Assert.That(okResult is OkResult, Is.True);

        }
    }
}
