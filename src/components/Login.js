import React, { useState } from "react"
import "../styles/Login.css"
import username from "../images/login-page/User.png"
import password from "../images/login-page/Password.png"
import DoctorLoginApi from "../api/DoctorLoginApi"
import NurseLoginApi from "../api/NurseLoginApi"
import { useNavigate } from "react-router-dom"
import PatientLoginApi from "../api/PatientLoginApi"
export default function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [emptyUsernameError, setEmptyUsernameError] = useState(false);
    const [emptyPasswordError, setEmptyPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isCheckedDoctor, setIsCheckedDoctor] = useState(false);
    const [isCheckedNurse, setIsCheckedNurse] = useState(false);

    const navigate = useNavigate();

    const handleCheckboxChangeDoctor = (event) => {
        setIsCheckedDoctor(event.target.checked);
    }

    const handleCheckboxChangeNurse = (event) => {
        setIsCheckedNurse(event.target.checked);
    }
    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const validateFormData = () => {
        setEmptyUsernameError(false);
        setEmptyPasswordError(false);
        setErrorMessage("");
        if(!formData.username && !formData.password){
            console.log("2");
            setEmptyPasswordError(true);
            setEmptyUsernameError(true);
            setErrorMessage("Username and password are mandatory!");
            return false;
        }
        else if(!formData.username){
            setEmptyPasswordError(true);
            setErrorMessage("Username is mandatory");
            return false;
        }
        return true;
    }

    const loginFunction = async () => {
        let response;
        
        if(validateFormData()){
            if(isCheckedDoctor){
                response = await DoctorLoginApi(
                formData.username,
                formData.password
            )
                if(!response.isError){
                    navigate("/doctorpage");
                    localStorage.setItem("user",JSON.stringify({
                        firstName:response.firstName,
                        lastName:response.lastName
                    }))
                }
            }
            else if(isCheckedNurse){
                response = await NurseLoginApi(
                formData.username,
                formData.password
                ) 
                if(!response.isError){
                    navigate("/nursemainpage");
                    localStorage.setItem("user",JSON.stringify({
                        firstName:response.firstName,
                        lastName: response.lastName
                    }))
                }
            }               
            else
            {
                response = await PatientLoginApi(
                formData.username,
                formData.password
                )
                if(!response.isError){
                     navigate("/patientpage");
                     localStorage.setItem("user",JSON.stringify({
                        firstName:response.firstName,
                        lastName:response.lastName
                    }))
                }
            }

            if (response.isError){
                console.log('No');
                setEmptyPasswordError(true);
                setEmptyUsernameError(true);
                setErrorMessage("Invalid credentials!");
           }
              
          console.log(response);
            return true;
        }
        
    }
    
    return (
        <div className="login">
            <div className="login-container">
                <h2>Sign in to start your session</h2>
                <h3 className="username-text">Username</h3>
                <div className="username">
                    <img src={username} className="username-image"/>
                    <input type="text" name="username" className="username-input" onChange={handleFormData} emptyFieldError={emptyUsernameError} value={formData.username} />
                </div>
                <h3 className="password-text">Password</h3>
                <div className="password">
                    <img src={password} className="password-image" />
                    <input type="password" name="password" className="password-input" onChange={handleFormData} emptyFieldError={emptyPasswordError}  value={formData.password}/>
                </div>
                <div className="role">
                    <label class="container-doctor">
                    <input type="checkbox" checked={isCheckedDoctor} onChange={handleCheckboxChangeDoctor}/>
                    <span class="checkmark" >I'm a doctor</span>
                    </label>

                    <label class="container-nurse">
                    <input type="checkbox" checked={isCheckedNurse} onChange={handleCheckboxChangeNurse}/>
                    <span class="checkmark" >I'm a nurse</span>
                    </label>
                    
                </div>
                <button className="login-button" onClick={loginFunction}>Sign in</button>
            </div>
        </div>
    )
}
