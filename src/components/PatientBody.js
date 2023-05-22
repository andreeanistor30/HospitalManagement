import React from "react";
import "../styles/PatientBody.css"
import treatment from "../images/patient-page/Treatment.png"
import diagnostic from "../images/patient-page/Diagnostics.png"
import analysis from "../images/patient-page/Analysis.png"
import setting from "../images/patient-page/Settings.png"
import { useNavigate } from "react-router-dom"
export default function DoctorBody() {
    const navigate = useNavigate();

    const myDiagnosticClick = () => {
        navigate('/mydiagnostic')
    }

    const myAnalysisClick = () => {
        navigate('/myanalysis')
    }

    const onClickSettings = () => {
        navigate('/settings')
    }
    const myTreatmentClick = () => {
        navigate('/treatmentregimen')
    }
    return (
        <div>
            <h2 className="dashboard-patient">Dashboard</h2>

            <div className="first-row-patient">
                <img src={treatment} className="treatment-photo" />
                <img src={diagnostic} className="diagnostic-photo-patient" />
                <img src={analysis} className="analysis-photo" />
            </div>

            <div className="first-row-buttons-patient">
                <button className="treatment-button" onClick={myTreatmentClick}>TREATMENT REGIMEN</button>
                <button className="diagnostic-button-patient" onClick={myDiagnosticClick}>MY DIAGNOSTIC</button>
                <button className="analysis-button" onClick={myAnalysisClick}>MEDICAL ANALYSIS</button>
            </div>

            <div className="second-row-patient">
                <img src={setting} className="setting-photo-patient" />
            </div>

            <div className="second-row-buttons">
                <button className="settings-button-patient" onClick={onClickSettings}>SETTINGS</button>
            </div>
        </div>
    );
}