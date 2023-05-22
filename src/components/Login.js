import React, { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Login.css"
import username from "../images/login-page/User.png"
import password from "../images/login-page/Password.png"
import DoctorLoginApi from "../api/DoctorLoginApi"
import NurseLoginApi from "../api/NurseLoginApi"
import { useNavigate } from "react-router-dom"
import PatientLoginApi from "../api/PatientLoginApi"
import AdminLoginApi from "../api/AdminLoginApi"
export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [emptyUsernameError, setEmptyUsernameError] = useState(false);
    const [emptyPasswordError, setEmptyPasswordError] = useState(false);
    const [isCheckedDoctor, setIsCheckedDoctor] = useState(false);
    const [isCheckedNurse, setIsCheckedNurse] = useState(false);
    const [isCheckedAdmin,setIsCheckedAdmin] = useState(false);

    const navigate = useNavigate();

    const handleCheckboxChangeDoctor = (event) => {
        setIsCheckedDoctor(event.target.checked);
    }

    const handleCheckboxChangeNurse = (event) => {
        setIsCheckedNurse(event.target.checked);
    }

    const handleCheckboxChangeAdmin = (event) =>{
        setIsCheckedAdmin(event.target.checked);
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
        if (!formData.username && !formData.password) {
            setEmptyPasswordError(true);
            setEmptyUsernameError(true);
            return false;
        }
        else if (!formData.username) {
            setEmptyPasswordError(true);
            return false;
        }
        return true;
    }

    const loginFunction = async () => {
        let response;

        if (validateFormData()) {
            if (isCheckedDoctor) {
                response = await DoctorLoginApi(
                    formData.username,
                    formData.password
                )
                console.log(response);
                if (!response.isError) {
                    navigate("/doctorpage");
                    localStorage.setItem("user", JSON.stringify({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        gender: response.gender,
                        phone: response.phone,
                        user:"doctor"
                    }))
                }
            }
            else if (isCheckedNurse) {
                response = await NurseLoginApi(
                    formData.username,
                    formData.password
                )
                if (!response.isError) {
                    navigate("/nursemainpage");
                    localStorage.setItem("user", JSON.stringify({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        gender: response.gender,
                        phone: response.phone,
                        user:"nurse"
                    }))
                }
            }
            else if(isCheckedAdmin){
                response = await AdminLoginApi(
                    formData.username,
                    formData.password
                )
                if(!response.isError){
                    navigate("/adminpage");
                    localStorage.setItem("user",JSON.stringify({
                        username: response.userName
                    }))
                }
            }
            else {
                response = await PatientLoginApi( 
                    formData.username,
                    formData.password
                )
                if (!response.isError) {
                    console.log(response);
                    navigate("/patientpage");
                    localStorage.setItem("user", JSON.stringify({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        gender: response.personalDetails.gender,
                        age : response.personalDetails.age,
                        identityNo : response.personalDetails.identityNo,
                        user:"patient"
                    }))
                }
            }

            if (response.isError) {
                toast.error("Invalid credentials");
                setEmptyPasswordError(true);
                setEmptyUsernameError(true);
            }
            return true;
        }

    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Sign in to start your session</h2>
                <h3 className="username-text">Username</h3>
                <div className="username">
                    <img src={username} className="username-image" />
                    <input type="text" name="username" className="username-input" onChange={handleFormData} emptyFieldError={emptyUsernameError} value={formData.username} autoComplete="off"/>
                </div>
                <h3 className="password-text">Password</h3>
                <div className="password">
                    <img src={password} className="password-image" />
                    <input type="password" name="password" className="password-input" onChange={handleFormData} emptyFieldError={emptyPasswordError} value={formData.password} autoComplete="off"/>
                </div>
                <div className="role">
                    <label class="container-doctor">
                        <input type="checkbox" checked={isCheckedDoctor} onChange={handleCheckboxChangeDoctor} autoComplete="off"/>
                        <span class="checkmark" >I'm doctor</span>
                    </label>

                    <label class="container-nurse">
                        <input type="checkbox" checked={isCheckedNurse} onChange={handleCheckboxChangeNurse} autoComplete="off"/>
                        <span class="checkmark" >I'm nurse</span>
                    </label>
                    <label className="container-admin">
                        <input type="checkbox" checked={isCheckedAdmin} onChange={handleCheckboxChangeAdmin} autoComplete="off"/>
                        <span class="checkmark">I'm admin</span>
                    </label>
                </div>
                <div className="footer">
                <button className="login-button" onClick={loginFunction}>Sign in</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
