import React,{useState} from "react"
import womanimage from "../images/doctor-page/doctor1.png"
import manimage from "../images/doctor-page/doctor.png"
import Header from "../components/Header"
import {useEffect} from "react"
import LaboratoryTable from "../components/LaboratoryTable"
import GetPatientsByDoctorNameApi from "../api/GetPatientsByDoctorNameApi"
import man from "../images/doctor-page/man.png"
import woman from "../images/doctor-page/woman.png"
import oldman from "../images/doctor-page/tax-inspector.png"
import oldwoman from "../images/doctor-page/old-woman.png"
import PatientInfoRow from "../components/PatientInfoRow"
export default function PatientInfoPage(){
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        nationality:""
    });
    
    const [response, setResponse] = useState([]);

    const getPatients = async () => {
        const response = await GetPatientsByDoctorNameApi(
            (JSON.parse(localStorage.getItem("user"))).firstName,
            (JSON.parse(localStorage.getItem("user"))).lastName
        );
        setResponse(response);
        console.log(response)
    }

    useEffect(() => {
        getPatients()
    }, []);

    const handleFormData = (event) => {
        const { name, value } = event.target
        setData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return(
        <div>
            <Header
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />

            <h2 className="analysis-results" style={{marginTop:"50px"}}>Patients list</h2>
            <div className="analysis-line"/>

            <LaboratoryTable 
                firstColumn="#"
                secondColumn="Full name"
                thirdColumn="Date of birth"
                forthColumn="Nationality"
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
                    <PatientInfoRow
                        firstcolumn={image}
                        firstname={item.firstName + " " + item.lastName}
                        diagnostic={item.personalDetails.dateOfBirth}
                        nationality={item.personalDetails.nationality}
                    />
                );
            })}

        </div>
    )
}