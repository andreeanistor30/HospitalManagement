import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import AddPatientBody from "../components/AddPatientBody";
export default function NurseAddPatientPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={'Name'}
            />
            <AddPatientBody />
        </div>
    )
}