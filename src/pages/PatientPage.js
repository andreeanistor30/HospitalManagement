import React from "react";
import Header from "../components/Header";
import photo from "../images/patient-page/man1.png"
import PatientBody from "../components/PatientBody"
export default function PatientPage(){
    
    return(
        <div>
            <Header
            img={photo}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <PatientBody />
        </div>
    );
}