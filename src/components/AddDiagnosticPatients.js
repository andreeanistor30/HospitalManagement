import React from "react"
import "../styles/AddDiagnosticPatients.css"
import GetByIdentityNoApi from "../api/GetByIdentityNoApi"
import { useState } from "react"
import AddDetailsApi from "../api/AddDetailsApi"
import oldman from "../images/doctor-page/old-man.png"
import oldwoman from "../images/doctor-page/grandmother.png"
import man from "../images/doctor-page/man-background.png"
import woman from "../images/patient-page/woman.png"
export default function AddDiagnosticPatients() {
    const [details, setDetails] = useState({
        firstname: '',
        dateofbirth: '',
        email: '',
        gender: '',
        weight: '',
        height: '',
        respiratoryRate: '',
        age: ''
    })
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessage1, setErrorMessage1] = useState("");
    const onClick = async () => {
        const patient = await GetByIdentityNoApi(formData1.identityno);
        if (!patient.isError) {
            const firstname = patient.firstName + " " + patient.lastName;
            const dateofbirth = patient.personalDetails.dateOfBirth;
            const email = patient.personalDetails.email;
            const gender = patient.personalDetails.gender;
            const age = patient.personalDetails.age;
            const weight = patient.vitalSigns.weight;
            const height = patient.vitalSigns.height;
            const respiratoryRate = patient.vitalSigns.respiratoryRate;
            const temperature = patient.vitalSigns.temperature;
            const allergyType = patient.vitalSigns.allergyType;
            const allergen = patient.vitalSigns.allergen;
            const heartRate = patient.vitalSigns.heartRate;
            const bloodSugar = patient.vitalSigns.bloodSugar;
            const bloodPressure = patient.vitalSigns.bloodPressure;
            setDetails({
                firstname: 'Full name: ' + firstname,
                dateofbirth: 'Date of birth: ' + dateofbirth,
                email: 'Email: ' + email,
                gender: gender,
                weight: 'Weight: ' + weight + 'kg',
                height: 'Height: ' + height + 'cm',
                respiratoryRate: 'Respiratory rate/min: ' + respiratoryRate,
                temperature: 'Temperature: ' + temperature,
                allergyType: 'Allergy type: ' + allergyType,
                allergen: 'Allergen: ' + allergen,
                heartRate: 'Heart rate: ' + heartRate + '(BPM)',
                bloodPressure: 'Blood pressure: ' + bloodPressure + 'mmHg',
                bloodSugar: 'Blood sugar: ' + bloodSugar + 'mg/dL'

            })
        }
        else
        {
            setErrorMessage("The patient with this identity no doesn't exist");
        }


    }

    const saveClick = async () => {
        const resp = await AddDetailsApi(diagnostic.diagnostic, diagnostic.treatment, formData1.identityno);
        if(resp.isError)
            setErrorMessage1("Invalid data");
    }

    const [formData1, setFormData1] = useState({
        identityno: ""
    })

    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData1(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const [diagnostic, setDiagnostic] = useState({
        diagnostic: "",
        treatment: ""
    })

    const handleFormDataDiagnostic = (event) => {
        const { name, value } = event.target
        setDiagnostic(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    let image = null;
    if (details.gender === "M" && details.age >= 60) {
        image = oldman;
    } else if (details.gender === "F" && details.age>= 60) {
        image = oldwoman;
    } else if (details.gender === "M") {
        image = man;
    } else {
        image = woman;
    }

    return (

        <div>
            <div className="src-div">
                <h2 className="txt">Identity no</h2>
                <input name="identityno" value={formData1.identityno} type="search" className="input-search" onChange={handleFormData} />
                <div className="src-err">
                <button className="src-button" onClick={onClick}>Search</button>
                {errorMessage ? <p className='err-message-identity-no'>{errorMessage}</p> : <div className='no-er-message-identity-no'> </div>}
                </div>
            </div>
            <div className="diagnostic-div">
                <img src={image} className="icon"/>
                <div className="date">
                    <div className="Row">
                        <h2 className="full-name-prp">{details.firstname}</h2>
                        <h2 className="vital-signs-prop">{details.weight}</h2>
                        <h2 className="vital-signs-prop">{details.heartRate}</h2>
                        <h2 className="vital-signs-prop">{details.temperature}</h2>
                    </div>
                    <div className="Row">
                        <h2 className="date-of-birth">{details.dateofbirth}</h2>
                        <h2 className="vital-signs-prop">{details.height}</h2>
                        <h2 className="vital-signs-prop">{details.bloodPressure}</h2>
                        <h2 className="vital-signs-prop">{details.allergyType}</h2>
                    </div>
                    <div className="Row">
                        <h2 className="ph-number">{details.email}</h2>
                        <h2 className="vital-signs-prop">{details.respiratoryRate}</h2>
                        <h2 className="vital-signs-prop">{details.bloodSugar}</h2>
                        <h2 className="vital-signs-prop">{details.allergen}</h2>
                    </div>

                </div>
            </div>
            <div className="src-div">
                <h2 className="txt">Diagnostic</h2>
                <input name="diagnostic" type="search" className="input-search" value={diagnostic.diagnostic} onChange={handleFormDataDiagnostic} />
            </div>

            <div className="src-div">
                <h2 className="txt">Treatment</h2>
                <textarea className="treatment-search" name="treatment" value={diagnostic.treatment} onChange={handleFormDataDiagnostic} placeholder="Drug1 frecvency/day, Drug2 frecvency/day ..."/>
            </div>
            <div className="save-err">
            {errorMessage1 ? <p className='err-message-save'>{errorMessage1}</p> : <div className='no-er-message-save'> </div>}
            <button className="sv-btn" onClick={saveClick}>Save</button>
            </div>
        </div>
    )
}