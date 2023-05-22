import React, { useEffect } from "react"
import { useState } from "react"
import "../styles/MyDiagnostic.css"
import "../styles/AddPatientBody.css"
import "../styles/TreatmentRegimen.css"
import GetMedicalPrescriptionApi from "../api/GetMedicalPrescriptionApi"
import TreatmentRegimenRow from "./TreatmentRegimenRow"
import pils from "../images/route/pills.png"
import injectable from "../images/route/injection.png"
import topical from "../images/route/ointment.png"
import inhalation from "../images/route/inhaler.png"
import optho from "../images/route/eye-dropper.png"
import otic from "../images/route/hearing-exam.png"
import nasal from "../images/route/spray.png"
import sublng from "../images/route/sublingual.png"
import transdermal from "../images/route/patch.png"
export default function TreatmentRegimen() {
    const [response, setResponse] = useState([]);

    const treatmentRegimen = async () => {
        const response = await GetMedicalPrescriptionApi((JSON.parse(localStorage.getItem("user"))).identityNo);
        setResponse(response);
    }

    useEffect(() => {
        treatmentRegimen()
    }, []);

    return (
        <div>

            <h3 className="vital-title">My treatment</h3>
            <div className="line" />
            <div className="header-div-regimen">
                <h3 className="symbol-column">#</h3>
                <h3 className="medicine-column">Medicine</h3>
                <h3 className="route-column">Route</h3>
                <h3 className="dosage-column">Dosage</h3>
                <h3 className="noOfDays-column">No of days</h3>
                <h3 className="instructions-column">Instructions</h3>
            </div>
            {response.length > 0 && response.map((item) => {
                let image;
                if (item.route === "Oral")
                    image = pils;
                else if (item.route === "Injectable")
                    image = injectable;
                else if (item.route === "Topical")
                    image = topical;
                else if (item.route === "Inhalation")
                    image = inhalation;
                else if (item.route === "Ophthalmic")
                    image = optho;
                else if (item.route === "Otic")
                    image = otic;
                else if (item.route === "Nasal")
                    image = nasal;
                else if (item.route === "Sublingual")
                    image = sublng;
                else
                    image = transdermal;

                return (
                    <TreatmentRegimenRow
                        image={image}
                        medicine={item.medicine}
                        route={item.route}
                        dosage={item.dosage}
                        noOfDays={item.noOfDays}
                        instructions={item.instructions}
                    />
                );
            })}
        </div>
    )
}