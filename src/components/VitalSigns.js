import React from "react"
import '../styles/VitalSigns.css'
import { useState } from "react"
import AddVitalSignsApi from "../api/AddVitalSignsApi"
export default function VitalSigns() {
   const [errorMessage, setErrorMessage] = useState("");

   const [formData4, setFormData4] = useState({
      identityno: "",
      weight: "",
      height: "",
      respiratoryrate: "",
      bloodsugar: "",
      heartrate: "",
      temperature: "",
      bloodpressure: "",
      allergytype: "",
      allergen: ""

   })

   const handleFormData4 = (event) => {
      const { name, value } = event.target
      setFormData4(prevFormData => {
         return {
            ...prevFormData,
            [name]: value
         }
      })
   }

   const onClickButton = async () => {
    
      const response3 = await AddVitalSignsApi(
         formData4.identityno,
         formData4.weight,
         formData4.respiratoryrate,
         formData4.bloodsugar,
         formData4.height,
         formData4.heartrate,
         formData4.temperature,
         formData4.bloodpressure,
         formData4.allergytype,
         formData4.allergen
      )  
      if (response3.isError === true)
         setErrorMessage("Invalid data");
      else
         return response3;
   }
   return (
      <div>
         <div className="identity-no-div">
            <h3 className="identityno-txt">Identity No.</h3>
            <input name="identityno" type="search" className="identityno-input-signs" value={formData4.identityno} onChange={handleFormData4} />
         </div>
         <h3 className="vital-signs">Vital Signs</h3>
         <div className="vitalsigns-line" />


         <div className="weight-div">
            <h3 className="h3-weight">Weight(kg)</h3>
            <input name="weight" type="search" className="weight-input" value={formData4.weight} onChange={handleFormData4} />
            <h3 className="temperature" >Temperature</h3>
            <input name="temperature" type="search" className="temperature-input" value={formData4.temperature} onChange={handleFormData4} />
         </div>

         <div className="respiratory-div">
            <h3 className="h3-respiratory">RespiratoryRate/min</h3>
            <input name="respiratoryrate" type="search" className="respiratory-input" value={formData4.respiratoryrate} onChange={handleFormData4} />
            <h3 className="bloodpresure" >Blood Presure</h3>
            <input name="bloodpressure" type="search" className="bloodpresure-input" value={formData4.bloodpressure} onChange={handleFormData4} />
         </div>

         <div className="blood-div">
            <h3 className="h3-blood">Blood Sugar</h3>
            <input name="bloodsugar" type="search" className="bloodsugar-input" value={formData4.bloodsugar} onChange={handleFormData4} />
            <h3 className="h3-height" >Height(cm)</h3>
            <input name="height" type="search" className="height-input" value={formData4.height} onChange={handleFormData4} />
         </div>

         <div className="heartrate-div">
            <h3 className="heartrate-h3">Heart Rate(BPM)</h3>
            <input name="heartrate" type="search" className="heartrate-input" value={formData4.heartrate} onChange={handleFormData4} />
         </div>

         <h3 className="allergies">Allergies</h3>
         <div className="allergies-line" />

         <div className="allergies-div">
            <h3 className="h3-allergies">Allergy Type</h3>
            <input name="allergytype" type="search" className="allergies-input" value={formData4.allergytype} onChange={handleFormData4} />
            <h3 className="h3-allergen" >Allergen</h3>
            <input name="allergen" type="search" className="allergen-input" value={formData4.allergen} onChange={handleFormData4} />
         </div>
         <div className="footer-vital">
            {errorMessage ? <p className='error-message'>{errorMessage}</p> : <div className='no-error-message'> </div>}
            <button className="save-button-vitalsign" onClick={onClickButton}>Save</button>
         </div>

      </div>


   )
}