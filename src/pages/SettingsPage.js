import React from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
export default function SettingsPage(){
    return(
        <div>
            <Header 
            img={image}
            txt={'Name'}
            />
            
        </div>
    )
}