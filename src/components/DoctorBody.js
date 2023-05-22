import React from "react";
import "../styles/DoctorBody.css"
import info from "../images/doctor-page/Info.png"
import diagnostic from "../images/doctor-page/Diagnostic.png"
import laboratory from "../images/doctor-page/laboratory.png"
import setting from "../images/doctor-page/Settings.png"
import medicalprescription from "../images/doctor-page/prescription.png"
import { useNavigate } from "react-router-dom"
export default function DoctorBody(){
    const navigate = useNavigate();
    
    const onClick = () =>{
        navigate("/diagnosticpatient");
    }

    const onClickLaboratory = () =>{
        navigate('/doctorlaboratory');
    }

    const onClickSettings = () =>{
        navigate('/settings')
    }

    const onClickPatientsInfo = () =>{
        navigate('/patientinfo')
    }
    const onClickPrescription = () =>{
        navigate('/prescriptionmedicine')
    }
    return(
        <div>
            <h2 className="dashboard">Dashboard</h2>

            <div className="first-row">
                <img src={info} className="info-photo" />
                <img src={diagnostic} className="diagnostic-photo" />
                <img src={laboratory} className="laboratory-photo" />
            </div>

            <div className="first-row-buttons">
                <button className="info-button" onClick={onClickPatientsInfo}>PATIENTS INFO</button>
                <button className="diagnostic-button" onClick={onClick}>DIAGNOSTICS PATIENTS</button>
                <button className="laboratory-button" onClick={onClickLaboratory}>LABORATORY</button>
            </div>

            <div className="second-row">
                <img src={medicalprescription} className="medical-prescription" />
                <img src={setting} className="setting-photo-doctor" />
            </div>

            <div className="second-row-buttons">
            <button className="medicalprescription-button" onClick={onClickPrescription}>MEDICAL PRESCRIPTION</button>
                <button className="settings-button" onClick={onClickSettings}>SETTINGS</button>
            </div>
        </div>
    );
}