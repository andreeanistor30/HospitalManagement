import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import DropDownSearch from "../components/DropDownSearch";
export default function NurseDischargePatientPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={'Name'}
            />
            <DropDownSearch />
        </div>
    )
}