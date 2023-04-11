import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import Settings from "../components/Settings"
export default function SettingsPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <Settings />
        </div>
    )
}