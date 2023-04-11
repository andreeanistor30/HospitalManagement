import React from "react"
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import VitalSigns from "../components/VitalSigns"
export default function VitalSignsPage(){
    return (
        <div>
            <Header
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <VitalSigns />
        </div>
    )
}