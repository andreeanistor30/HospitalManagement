import React from "react"
import image from "../images/nurse-page/dustbin.png"
import '../styles/TableRow.css'
export default function TableRow({
    firstcolumn,
    firstname,
    lastname,
    diagnostic,
    doctor
}){
    return(
        <div className="tablerow-div">
            <h3 className="first-column">{firstcolumn}</h3>
            <h3 className="firstname">{firstname}</h3>
            <h3 className="lastname">{lastname}</h3>
            <h3 className="diagnostic">{diagnostic}</h3>
            <h3 className="doctor">{doctor}</h3>
            <img src={image} className="image" />
        </div>
    )
}