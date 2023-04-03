import React from "react"
import '../styles/TableHeader.css'
export default function TableHeader(){
    return(
        <div className="header-div">  
            <h3 className="first-column">#</h3>
            <h3 className="firstname-column">Firstname</h3>
            <h3 className="lastname-column">Lastname</h3>
            <h3 className="diagnostic-column">Diagnostic</h3>
            <h3 className="doctor-column">Doctor</h3>
        </div>
    )
}