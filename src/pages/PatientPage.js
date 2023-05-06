import React from "react";
import Header from "../components/Header";
import manimage from "../images/patient-page/man.png"
import womanimage from "../images/patient-page/woman.png"
import oldman from "../images/doctor-page/old-man.png"
import oldwoman from "../images/doctor-page/grandmother.png"
import PatientBody from "../components/PatientBody"
export default function PatientPage(){
    let image;
    if ((JSON.parse(localStorage.getItem("user"))).gender === "M" && (JSON.parse(localStorage.getItem("user"))).age > 60) {
            image = oldman;
          } else if ((JSON.parse(localStorage.getItem("user"))).gender === "F" && (JSON.parse(localStorage.getItem("user"))).age>= 60) {
            image = oldwoman;
          } else if ((JSON.parse(localStorage.getItem("user"))).gender === "M") {
            image = manimage;
          } else {
            image = womanimage;
          }
    return(
        
        <div>
            <Header
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <PatientBody />
        </div>
    );
}