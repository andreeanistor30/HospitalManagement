import React from "react";
import "../styles/PatientBody.css"
import treatment from "../images/patient-page/Treatment.png"
import diagnostic from "../images/patient-page/Diagnostics.png"
import analysis from "../images/patient-page/Analysis.png"
import history from "../images/patient-page/History.png"
import setting from "../images/patient-page/Settings.png"
export default function DoctorBody(){
    
    return(
        <div>
            <h2 className="dashboard-patient">Dashboard</h2>

            <div className="first-row-patient">
                <img src={treatment} className="treatment-photo" />
                <img src={diagnostic} className="diagnostic-photo-patient" />
                <img src={analysis} className="analysis-photo" />
            </div>

            <div className="first-row-buttons-patient">
                <button className="treatment-button">TREATMENT REGIMEN</button>
                <button className="diagnostic-button-patient">MY DIAGNOSTIC</button>
                <button className="analysis-button">MEDICAL ANALYSIS</button>
            </div>

             <div className="second-row-patient">
                <img src={setting} className="setting-photo-patient" />
            </div>

            <div className="second-row-buttons">
                <button className="settings-button">SETTINGS</button>
            </div> 
        </div>
    );
}