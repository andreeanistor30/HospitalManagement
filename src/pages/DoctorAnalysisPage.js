import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import womanimage from "../images/doctor-page/doctor1.png"
import manimage from "../images/doctor-page/doctor.png"
import LaboratoryTable from "../components/LaboratoryTable";
import DoctorTableRow from "../components/DoctorTableRow";
import GetPatientsByDoctorNameApi from "../api/GetPatientsByDoctorNameApi";
import man from "../images/doctor-page/man.png"
import woman from "../images/doctor-page/woman.png"
import oldman from "../images/doctor-page/tax-inspector.png"
import oldwoman from "../images/doctor-page/old-woman.png"

export default function DoctorAnalysisPage(){
    const [identityData, setIdentityData] = useState({
        identityno:""
    });
    
    const [response, setResponse] = useState([]);

    const getPatients = async () => {
        const response = await GetPatientsByDoctorNameApi(
            (JSON.parse(localStorage.getItem("user"))).firstName,
            (JSON.parse(localStorage.getItem("user"))).lastName
        );
        setResponse(response);
    }

    useEffect(() => {
        getPatients()
    }, []);

    const handleFormData = (event) => {
        const { name, value } = event.target
        setIdentityData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div>
            <Header
                img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
                txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <h2 className="analysis-results" style={{marginTop:"50px"}}>Analysis Results</h2>
            <div className="analysis-line"/>
            <LaboratoryTable 
                firstColumn="#"
                secondColumn="Full name"
                thirdColumn="Diagnostic"
            />
            {response.length > 0 && response.map((item) => {
                let image = null;
                if (item.personalDetails.gender === "M" && item.personalDetails.age >= 60) {
                    image = oldman;
                } else if (item.personalDetails.gender === "F" && item.personalDetails.age>= 60) {
                    image = oldwoman;
                } else if (item.personalDetails.gender === "M") {
                    image = man;
                } else {
                    image = woman;
                }
                return (
                    <DoctorTableRow
                        firstcolumn={image}
                        firstname={item.firstName + " " + item.lastName}
                        diagnostic={item.diagnostic}
                        identityno={item.personalDetails.identityNo}
                    />
                );
            })}
        </div>
    );
}