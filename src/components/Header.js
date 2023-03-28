import React from "react"
import "../styles/Header.css"
export default function Header({
    img,
    txt
}){
    return(
        <div className="div-header">
            <img src={img} className="header-image" />
            <h3 className="header-text">{txt}</h3>
            <button className="logout-button">Logout</button>
        </div>
    );
}