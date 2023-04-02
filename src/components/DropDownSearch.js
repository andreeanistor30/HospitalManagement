import React from "react";
import '../styles/DropDownSearch.css'
export default function DropDownSearch(){
    
    return(
        <div class="dropdown">
        <select id="search" className="search">
            <option value="Doctor Name">Doctor Name</option>
            <option value="Pacient Name">Pacient Name</option>
        </select>
        <input type="search" className="search-input" />
        <button className="search-button" >Search</button>
        </div>
        
    )
}