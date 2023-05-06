import React from "react"
import Header from "../components/Header"
import womanimage from "../images/doctor-page/doctor1.png"
import manimage from "../images/doctor-page/doctor.png"
import AddDiagnosticPatients from "../components/AddDiagnosticPatients"
export default function DiagnosticPatientsPage(){
    return(
    <div>
        <Header
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
        <AddDiagnosticPatients />
        
    </div>
    )
}