import React from "react";
import womanimage from "../images/nurse-page/nurse.png"
import manimage from "../images/nurse-page/man-nurse.png"
import Header from "../components/Header"
import AddPatientBody from "../components/AddPatientBody";
export default function NurseAddPatientPage(){
    return(
        <div>
            <Header 
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <AddPatientBody />
        </div>
    )
}