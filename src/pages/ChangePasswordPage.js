import nurseImage from "../images/nurse-page/nurse.png"
import nurseManImage from "../images/nurse-page/man-nurse.png"
import doctorWomanImage from "../images/doctor-page/doctor1.png"
import doctorManImage from "../images/doctor-page/doctor.png"
import oldWomanPatientImage from "../images/doctor-page/grandmother.png"
import teenWomanPatientImage from "../images/patient-page/woman.png"
import oldManPatientImage from "../images/doctor-page/old-man.png"
import teenManPatientImage from "../images/patient-page/man.png"
import Header from '../components/Header'
import ChangePassword from "../components/ChangePassword"
export default function ChangePasswordPage(){
    const userRole = JSON.parse(localStorage.getItem("user")).user;
    const gender = JSON.parse(localStorage.getItem("user")).gender;
    const age = JSON.parse(localStorage.getItem("user")).age;
    let image;
    if (userRole === "nurse" && gender === "F") {
        image = nurseImage;
    } else if (userRole === "nurse" && gender === "M") {
        image = nurseManImage;
    }
    else if (userRole === "doctor" && gender === "F") {
        image = doctorWomanImage;
    }
    else if (userRole === "doctor" && gender === "M") {
        image = doctorManImage;
    }
    else if (userRole === "patient" && gender === "F" && age >= 60) {
        image = oldWomanPatientImage
    }
    else if (userRole === "patient" && gender === "F" && age < 60) {
        image = teenWomanPatientImage
    }
    else if (userRole === "patient" && gender === "M" && age >= 60) {
        image = oldManPatientImage
    }
    else
        image = teenManPatientImage;
    return(
        <div>
            <Header
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <ChangePassword />
        </div>
    )
}