import React from "react"
import "../styles/Header.css"
import { useNavigate } from "react-router-dom"
export default function Header({
    img,
    txt
}){
    const navigate = useNavigate();

    const onClick = () => {
        localStorage.clear();
        navigate("/");
    }
    return(
        <div className="div-header">
            <img src={img} className="header-image" />
            <h3 className="header-text">{txt}</h3>
            <button className="logout-button" onClick={onClick}>Logout</button>
        </div>
    );
}