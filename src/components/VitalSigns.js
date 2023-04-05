import React from "react"
import '../styles/VitalSigns.css'
export default function VitalSigns(){
    return(
        <div>
          <div className="identity-no-div">
            <h3 className="identityno-txt">Identity No.</h3>
            <input type="search" className="identityno-input-signs" />
         </div>
         <h3 className="vital-signs">Vital Signs</h3>
         <div className="vitalsigns-line"/>
        

         <div className="weight-div">
            <h3 className="h3-weight">Weight(kg)</h3>
            <input type="search" className="weight-input" />
            <h3 className="temperature" >Temperature</h3>
            <input type="search" className="temperature-input" />
         </div>

         <div className="respiratory-div">
            <h3 className="h3-respiratory">RespiratoryRate/min</h3>
            <input type="search" className="respiratory-input" />
            <h3 className="bloodpresure" >Blood Presure</h3>
            <input type="search" className="bloodpresure-input" />
         </div>
            
         <div className="blood-div">
            <h3 className="h3-blood">Blood Sugar</h3>
            <input type="search" className="bloodsugar-input" />
            <h3 className="h3-height" >Height(cm)</h3>
            <input type="search" className="height-input" />
         </div>
        
        <div className="heartrate-div">
            <h3 className="heartrate-h3">Heart Rate(BPM)</h3>
            <input type="search" className="heartrate-input" />
        </div>

        <h3 className="allergies">Allergies</h3>
        <div className="allergies-line"/>

        <div className="allergies-div">
            <h3 className="h3-allergies">Allergy Type</h3>
            <input type="search" className="allergies-input" />
            <h3 className="h3-allergen" >Allergen</h3>
            <input type="search" className="allergen-input" />
         </div>
         <button className="save-button-vitalsign">Save</button>
         </div>


    )
}