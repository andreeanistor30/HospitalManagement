import React from "react";
import add from "../images/nurse-page/add.png"
import remove from "../images/nurse-page/rem.png"
import setting from "../images/doctor-page/Settings.png"
import vital from "../images/nurse-page/vital-sign.png"
import laboratory from "../images/doctor-page/laboratory.png"
import "../styles/NurseBody.css"
import { useNavigate } from "react-router-dom"
export default function NurseBody(){

    const navigate = useNavigate();

    const onClickAdd = () => {
        navigate('/addpatient')
    }

    const onClickDischarge = () => {
        navigate('/dischargepatient')
    }
    
    const onClickSettings = () => {
        navigate('/settings')
    }

    const onClickVital = () => {
        navigate('/vitalsigns')
    }

    const onClickLaboratory = () =>{
        navigate('/laboratory')
    }

    return(
    <div>
        <h2 className="dashboard-nurse">Dashboard</h2>

        <div className="first-row-nurse">
            <img src={add} className="add-photo" />
            <img src={remove} className="remove-photo" />
            <img src={vital} className="vital-photo" />
        </div>

        <div className="first-row-buttons-nurse">
            <button className="add-button" onClick={onClickAdd}>ADD PATIENT</button>
            <button className="remove-button" onClick={onClickDischarge}>DISCHARGE PATIENT</button>
            <button className="vital-button" onClick={onClickVital}>VITAL SIGNS</button>
        </div>

        <div className="second-row-nurse">
            <img src={laboratory} className="laboratory-photo-nurse" />
            <img src={setting} className="setting-photo-nurse" />
        </div>

        <div className="second-row-buttons-nurse">
            <button className="laboratory-button-nurse" onClick={onClickLaboratory}>LABORATORY</button>
            <button className="setting-button-nurse" onClick={onClickSettings}>SETTINGS</button>
        </div>
    </div>
    )
}