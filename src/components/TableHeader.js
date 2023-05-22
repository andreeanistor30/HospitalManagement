import React from "react"
import '../styles/TableHeader.css'
import '../styles/DropDownSearch.css'
import GetByDoctorNameApi from "../api/GetByDoctorNameApi"
import GetByPatientNameApi from "../api/GetByPatientNameApi"
export default function TableHeader({
    onChange,
    value,
    name,
    inputValue,
    inputName,
    setResponse
}){
    const onClick = async () =>{
        if(value === 'Doctor Name')
        {   const splitedInput = inputValue.split(" ");
            const response = await GetByDoctorNameApi(splitedInput[0],splitedInput[1]);
            setResponse(response);
        }
        else
        {
            const splitedInput = inputValue.split(" ");
            const response = await GetByPatientNameApi(splitedInput[0],splitedInput[1]);
            setResponse(response);
        }
    }
    return(
        <div>
        <div class="dropdown">
        <select id="search" className="search" onChange={onChange} value={value} name={name}>
            <option value="Doctor Name">Doctor Name</option>
            <option value="Pacient Name">Pacient Name</option>
        </select>
        <input type="search" onChange = {onChange} className="search-input" value={inputValue} name={inputName} autoComplete="off"/>
        <button className="search-button" onClick={onClick}>Search</button>
        </div>
        <div className="header-div">  
            <h3 className="first-column">#</h3>
            <h3 className="firstname-column">Firstname</h3>
            <h3 className="lastname-column">Lastname</h3>
            <h3 className="diagnostic-column">Diagnostic</h3>
            <h3 className="doctor-column">Doctor</h3>
        </div>
        </div>
    )
}