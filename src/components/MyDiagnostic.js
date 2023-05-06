import React,{useState} from "react"
import { useEffect } from "react"
import "../styles/MyDiagnostic.css"
import GetDetailsApi from "../api/GetDetailsApi"
export default function MyDiagnostic() {
    const [formData, setFormData] = useState({
        weight: "",
        respiratoryRate: "",
        bloodSugar: "",
        height: "",
        heartRate: "",
        temperature: "",
        bloodPressure: "",
        allergyType: "",
        allergen: "",
        diagnostic: ""
    })

    const fct = async () =>{
        const patients =await GetDetailsApi((JSON.parse(localStorage.getItem("user"))).firstName,(JSON.parse(localStorage.getItem("user"))).lastName)
        if (patients) {
            console.log(patients)
            setFormData({
                weight: patients.weight,
                respiratoryRate: patients.respiratoryRate,
                bloodSugar: patients.bloodSugar,
                height: patients.height,
                heartRate: patients.heartRate,
                temperature: patients.temperature,
                bloodPressure: patients.bloodPressure,
                allergyType: patients.allergyType,
                allergen: patients.allergen,
                diagnostic: patients.diagnostic

            })
        }
    }
    useEffect(() => {
        fct()
    }, []);
    return(
        <div className="myPersonalDetails-div">
            <div className="titles">
                <div className="f-title">
                <h3 className="vital-title">My vital signs</h3>
                <div className="title-line-vital"></div>

                <div className="wght-div">
                    <h3 className="myweight">Weight(kg)</h3>
                    <input className="inpt" value={formData.weight} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">RespiratoryRate/min</h3>
                    <input className="inpt" value={formData.respiratoryRate} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">Blood Sugar</h3>
                    <input className="inpt" value={formData.bloodSugar} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">Height(cm)</h3>
                    <input className="inpt" value={formData.height} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">Heart Rate(BPM)</h3>
                    <input className="inpt" value={formData.heartRate} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">Temperature</h3>
                    <input className="inpt" value={formData.temperature} type="text" readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myweight">Blood Presure</h3>
                    <input className="inpt" value={formData.bloodPressure} type="text" readOnly="readonly"/>
                </div>
                <h3 className="vital-title">My diagnostic</h3>
                <div className="title-line-vital"></div>
                <div className="wght-div">
                    <h3 className="myweight">Diagnostic</h3>
                    <input className="inpt" value={formData.diagnostic} type="text" readOnly="readonly"/>
                </div>
                </div>

                <div className="a-title">
                <h3 className="allergies-title">My allergies</h3>
                <div className="title-line-allergies"></div>

                <div className="wght-div">
                    <h3 className="myallergy" >Allergy Type</h3>
                    <input className="inpt" type="text" value={formData.allergyType} readOnly="readonly"/>
                </div>

                <div className="wght-div">
                    <h3 className="myallergy" type="text" value={formData.allergen} readOnly="readonly">Allergen</h3>
                    <input className="inpt" type="text" readOnly="readonly" value={formData.allergen}/>
                </div>

                </div>
                
            </div>

        </div>
    )
}