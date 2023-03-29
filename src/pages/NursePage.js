import React from "react";
import Header from "../components/Header"
import NurseBody from "../components/NurseBody"
import image from "../images/nurse-page/nurse.png"
export default function NursePage(){

    return(
        <div>
            <Header 
            img={image}
            txt={'Name'}
            />
            <NurseBody/>
        </div>
    )
}