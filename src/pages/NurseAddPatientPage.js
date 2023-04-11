import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import AddPatientBody from "../components/AddPatientBody";
export default function NurseAddPatientPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <AddPatientBody />
        </div>
    )
}