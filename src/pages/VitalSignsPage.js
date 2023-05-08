import React from "react"
import womanimage from "../images/nurse-page/nurse.png"
import manimage from "../images/nurse-page/man-nurse.png"
import Header from "../components/Header"
import VitalSigns from "../components/VitalSigns"
export default function VitalSignsPage(){
    return (
        <div>
            <Header
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <VitalSigns />
        </div>
    )
}