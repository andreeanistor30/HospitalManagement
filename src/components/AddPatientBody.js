import React from "react";
import '../styles/AddPatientBody.css'
import { useState } from "react"
import AddPatientApi from '../api/AddPatientApi'
import AddPersonalDetailsApi from "../api/AddPersonalDetailsApi";
import AddHomeAddressApi from "../api/AddHomeAddressApi";
export default function AddPatientBody() {

    const [errorMessage, setErrorMessage] = useState("");

    const [formData1, setFormData1] = useState({
        firstName: "",
        lastName: "",
        doctorName: ""
    })

    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData1(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const [formData2, setFormData2] = useState({
        dateofbirth: "",
        maritalstatus: "",
        religion: "",
        identityno: "",
        occupation: "",
        gender: "",
        nationality: "",
        email: ""
    })

    const handleFormData1 = (event) => {
        const { name, value } = event.target
        setFormData2(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const [formData3, setFormData3] = useState({
        city: "",
        district: "",
        address: "",
        phonenumber: "",
        postalcode: ""
    })

    const handleFormData3 = (event) => {
        const { name, value } = event.target
        setFormData3(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    const onClickButton = async () => {
        const response = await AddPatientApi(
            formData1.firstName,
            formData1.lastName,
            formData1.doctorName
        )
        
        if (response.isError === true) {
            setErrorMessage("Invalid data");
        }
        else {
            const response1 = await AddPersonalDetailsApi(
                formData1.firstName,
                formData1.lastName,
                formData2.dateofbirth,
                formData2.maritalstatus,
                formData2.religion,
                formData2.identityno,
                formData2.occupation,
                formData2.gender,
                formData2.nationality,
                formData2.email
            )

            if (response1.isError === true) {
                setErrorMessage("Invalid data");
            }

            else {
                console.log(response1);
                const response2 = await AddHomeAddressApi(
                    formData1.firstName,
                    formData1.lastName,
                    formData3.city,
                    formData3.district,
                    formData3.address,
                    formData3.phonenumber,
                    formData3.postalcode

                )
                return response2;

            }
        }


    }

    return (
        <div>
            <div className="doctor-div">
                <h3 className="h3-doctor">DoctorName</h3>
                <input name="doctorName" type="search" className="doctor-input" value={formData1.doctorName} onChange={handleFormData} />
            </div>
            <h2 className="personal-details">Personal Details</h2>
            <div className="line" />

            <div className="firstname-div">
                <h3 className="h3-firstname">Firstname</h3>
                <input name="firstName" type="search" className="firstname-input" value={formData1.firstName} onChange={handleFormData} />
                <h3 className="identity-no" >Identity No</h3>
                <input name="identityno" type="search" className="identityno-input" value={formData2.identityno} onChange={handleFormData1} />
            </div>

            <div className="lastname-div">
                <h3 className="h3-lastname">Lastname</h3>
                <input name="lastName" type="search" className="lastname-input" value={formData1.lastName} onChange={handleFormData} />
                <h3 className="occupation">Occupation</h3>
                <input name="occupation" type="search" className="occupation-input" value={formData2.occupation} onChange={handleFormData1} />
            </div>

            <div className="dateofbirth-div">
                <h3 className="dateofbirth">Date of birth</h3>
                <input name="dateofbirth" type="search" className="dateofbirth-input" value={formData2.dateofbirth} onChange={handleFormData1} />
                <h3 className="gender">Gender</h3>
                <input name="gender" type="search" className="gender-input" value={formData2.gender} onChange={handleFormData1} />
            </div>

            <div className="maritalstatus-div">
                <h3 className="maritalstatus">Status</h3>
                <input name="maritalstatus" type="search" className="maritalstatus-input" value={formData2.maritalstatus} onChange={handleFormData1} />
                <h3 className="nationality">Nationality</h3>
                <input name="nationality" type="search" className="nationality-input" value={formData2.nationality} onChange={handleFormData1} />
            </div>

            <div className="religion-div">
                <h3 className="religion">Religion</h3>
                <input name="religion" type="search" className="religion-input" value={formData2.religion} onChange={handleFormData1} />
                <h3 className="email">Email</h3>
                <input name="email" type="search" className="email-input" value={formData2.email} onChange={handleFormData1} />
            </div>

            <h2 className="home-address">Home Address</h2>
            <div className="line" />

            <div className="city-div">
                <h3 className="city">City</h3>
                <input name="city" type="search" className="city-input" value={formData3.city} onChange={handleFormData3} />
                <h3 className="district">District</h3>
                <input name="district" type="search" className="district-input" value={formData3.district} onChange={handleFormData3} />
            </div>

            <div className="address-div">
                <h3 className="address">Address</h3>
                <input name="address" type="search" className="address-input" value={formData3.address} onChange={handleFormData3} />
                <h3 className="phone-number">Phone</h3>
                <input name="phonenumber" type="search" className="phone-input" value={formData3.phonenumber} onChange={handleFormData3} />
            </div>

            <div className="postalcode-div">
                <h3 className="postal-code">Postal code</h3>
                <input name="postalcode" type="search" className="postalcode-input" value={formData3.postalcode} onChange={handleFormData3} />
               
            </div>
            <div className="footer">
            {errorMessage ? <p className='error-message'>{errorMessage}</p> : <div className='no-error-message'> </div>}
            <button className="save-button" onClick={onClickButton}>Save</button>
            </div>
        </div>
    )
}