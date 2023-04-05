import React from "react";
import "../styles/DoctorBody.css"
import info from "../images/doctor-page/Info.png"
import diagnostic from "../images/doctor-page/Diagnostic.png"
import laboratory from "../images/doctor-page/laboratory.png"
import setting from "../images/doctor-page/Settings.png"
export default function DoctorBody(){
    
    return(
        <div>
            <h2 className="dashboard">Dashboard</h2>

            <div className="first-row">
                <img src={info} className="info-photo" />
                <img src={diagnostic} className="diagnostic-photo" />
                <img src={laboratory} className="laboratory-photo" />
            </div>

            <div className="first-row-buttons">
                <button className="info-button">PATIENTS INFO</button>
                <button className="diagnostic-button">DIAGNOSTICS PATIENTS</button>
                <button className="laboratory-button">LABORATORY</button>
            </div>

            <div className="second-row">
                <img src={setting} className="setting-photo-doctor" />
            </div>

            <div className="second-row-buttons">
                <button className="settings-button">SETTINGS</button>
            </div>
        </div>
    );
}