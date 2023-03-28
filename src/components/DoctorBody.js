import React from "react";
import "../styles/DoctorBody.css"
import info from "../images/doctor-page/Info.png"
import diagnostic from "../images/doctor-page/Diagnostic.png"
import radiology from "../images/doctor-page/Radiology.png"
import history from "../images/doctor-page/History.png"
import setting from "../images/doctor-page/Settings.png"
export default function DoctorBody(){
    
    return(
        <div>
            <h2 className="dashboard">Dashboard</h2>

            <div className="first-row">
                <img src={info} className="info-photo" />
                <img src={diagnostic} className="diagnostic-photo" />
                <img src={radiology} className="radiology-photo" />
            </div>

            <div className="first-row-buttons">
                <button className="info-button">PATIENTS INFO</button>
                <button className="diagnostic-button">DIAGNOSTICS PATIENTS</button>
                <button className="radiology-button">RADIOLOGY</button>
            </div>

            <div className="second-row">
                <img src={history} className="history-photo" />
                <img src={setting} className="setting-photo" />
            </div>

            <div className="second-row-buttons">
                <button className="history-button">HISTORY</button>
                <button className="settings-button">SETTINGS</button>
            </div>
        </div>
    );
}