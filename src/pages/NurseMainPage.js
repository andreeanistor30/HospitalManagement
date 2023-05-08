import React from "react";
import Header from "../components/Header"
import NurseBody from "../components/NurseBody"
import womanimage from "../images/nurse-page/nurse.png"
import manimage from "../images/nurse-page/man-nurse.png"
export default function NursePage(){

    return(
        <div>
            <Header 
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <NurseBody/>
        </div>
    )
}