import React from "react";
import "../styles/TreatmentRegimenRow.css"
export default function TreatmentRegimenRow({ image, medicine, route, dosage, noOfDays, instructions }) {
    return (
        <div className="treatment-tablerow-div">
            <img src={image} className="route-image" />
            <h3 className="medicine-h3">{medicine}</h3>
            <h3 className="route-h3">{route}</h3>
            <h3 className="dosage-h3">{dosage}</h3>
            <h3 className="noOfDays-h3">{noOfDays}</h3>
            <h3 className="instructions-h3">{instructions}</h3>
        </div>
    )
}