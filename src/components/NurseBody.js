import React from "react";
import add from "../images/nurse-page/add.png"
import remove from "../images/nurse-page/rem.png"
import setting from "../images/doctor-page/Settings.png"
import "../styles/NurseBody.css"
export default function NurseBody(){
    return(
    <div>
        <h2 className="dashboard-nurse">Dashboard</h2>

        <div className="first-row-nurse">
            <img src={add} className="add-photo" />
            <img src={remove} className="remove-photo" />
            <img src={setting} className="setting-photo" />
        </div>

        <div className="first-row-buttons-nurse">
            <button className="add-button">ADD PATIENT</button>
            <button className="remove-button">REMOVE PATIENT</button>
            <button className="setting-button">SETTINGS</button>
        </div>
    </div>
    )
}