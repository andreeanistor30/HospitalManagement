import React,{useEffect} from "react";
import '../styles/AddPatientBody.css'
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPatientApi from '../api/AddPatientApi'
import AddPersonalDetailsApi from "../api/AddPersonalDetailsApi";
import AddHomeAddressApi from "../api/AddHomeAddressApi";
import { nationalityOptions } from "../data/nationalities";
import GetAllDoctorsApi from "../api/GetAllDoctorsApi"
export default function AddPatientBody() {
    const [doctorList, setDoctorList] = useState([]); // State variable to store the list of doctors
    const [selectedDoctor, setSelectedDoctor] = useState(""); // State variable to store the selected doctor's full name

    const [formData1, setFormData1] = useState({
        firstName: "",
        lastName: "",
        doctorName: ""
    })

    const handleFormData = (event) => {
        const { name, value } = event.target;
    
        if (name === "doctorName") {
          setSelectedDoctor(value); // Set the selected doctor's full name
        } else {
          setFormData1((prevFormData) => ({
            ...prevFormData,
            [name]: value
          }));
        }
      };

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
    const getAll = async () => {
        const resp = await GetAllDoctorsApi();
        setDoctorList(resp); // Assuming the response is an array of doctor objects
      }
    
      useEffect(() => {
        getAll()
      }, [])

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
            selectedDoctor
        )
        
        if (response.isError === true) {
            toast.error("Invalid data");
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
                toast.error("Invalid data");
            }

            else {
                const response2 = await AddHomeAddressApi(
                    formData1.firstName,
                    formData1.lastName,
                    formData3.city,
                    formData3.district,
                    formData3.address,
                    formData3.phonenumber,
                    formData3.postalcode

                )
                if(response2.isError === true){
                    toast.error("Invalid data");
                }
                else
                    toast.success("Insert successfully");
            }
        }


    }

    return (
        <div>
           <div>
           <div className="doctor-div">
          <h3 className="h3-doctor">DoctorName</h3>
          <select
            name="doctorName"
            className="doctor-input"
            value={selectedDoctor}
            onChange={handleFormData}
          >
            <option value="">Select Doctor</option>
            {doctorList.map((doctor) => (
              <option
                key={doctor.id}
                value={`${doctor.firstName} ${doctor.lastName}`}
              >
                {`${doctor.firstName} ${doctor.lastName}`}
              </option>
            ))}
          </select>
        </div>
                <h2 className="personal-details">Personal Details</h2>
                <div className="line" />
    
                <div className="firstname-div">
                    <h3 className="h3-firstname">Firstname</h3>
                    <input name="firstName" type="search" className="firstname-input" value={formData1.firstName} onChange={handleFormData} autoComplete="off"/>
                    <h3 className="identity-no" >Identity No</h3>
                    <input name="identityno" type="search" className="identityno-input" value={formData2.identityno} onChange={handleFormData1} autoComplete="off"/>
                </div>
    
                <div className="lastname-div">
                    <h3 className="h3-lastname">Lastname</h3>
                    <input name="lastName" type="search" className="lastname-input" value={formData1.lastName} onChange={handleFormData} autoComplete="off"/>
                    <h3 className="occupation">Occupation</h3>
                    <select name="occupation" className="occupation-input" value={formData2.occupation} onChange={handleFormData1}>
                        <option value="">Select Occupation</option>
                        <option value="Student">Student</option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
    
                <div className="dateofbirth-div">
                    <h3 className="dateofbirth">Date of birth</h3>
                    <input name="dateofbirth" type="date" className="dateofbirth-input" value={formData2.dateofbirth} onChange={handleFormData1} autoComplete="off"/>
                    <h3 className="gender">Gender</h3>
                    <select name="gender" className="gender-input" value={formData2.gender} onChange={handleFormData1}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
    
                <div className="maritalstatus-div">
                    <h3 className="maritalstatus">Status</h3>
                    <select
                        name="maritalstatus"
                        className="maritalstatus-input"
                        value={formData2.maritalstatus}
                        onChange={handleFormData1}
                    >
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
    
                    <h3 className="nationality">Nationality</h3>
                    <select
                        name="nationality"
                        className="nationality-input"
                        value={formData2.nationality}
                        onChange={handleFormData1}
                    >
                        <option value="">Select Nationality</option>
                        {nationalityOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
    
                </div>
    
                <div className="religion-div">
                    <h3 className="religion">Religion</h3>
                    <select name="religion" className="religion-input" value={formData2.religion} onChange={handleFormData1}>
                        <option value="">Select Religion</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Islam">Islam</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Judaism">Judaism</option>
                        <option value="Sikhism">Sikhism</option>
                        <option value="Atheism">Atheism</option>
                        <option value="Other">Other</option>
                    </select>
                    <h3 className="email">Email</h3>
                    <input name="email" type="search" className="email-input" value={formData2.email} onChange={handleFormData1} autoComplete="off"/>
                </div>
    
                <h2 className="home-address">Home Address</h2>
                <div className="line" />
    
                <div className="city-div">
                    <h3 className="city">City</h3>
                    <input name="city" type="search" className="city-input" value={formData3.city} onChange={handleFormData3} autoComplete="off"/>
                    <h3 className="district">District</h3>
                    <input name="district" type="search" className="district-input" value={formData3.district} onChange={handleFormData3} autoComplete="off"/>
                </div>
    
                <div className="address-div">
                    <h3 className="address">Address</h3>
                    <input name="address" type="search" className="address-input" value={formData3.address} onChange={handleFormData3} autoComplete="off"/>
                    <h3 className="phone-number">Phone</h3>
                    <input name="phonenumber" type="search" className="phone-input" value={formData3.phonenumber} onChange={handleFormData3} autoComplete="off"/>
                </div>
    
                <div className="postalcode-div">
                    <h3 className="postal-code">Postal code</h3>
                    <input name="postalcode" type="search" className="postalcode-input" value={formData3.postalcode} onChange={handleFormData3} autoComplete="off"/>
    
                </div>
                    <button className="save-button" onClick={onClickButton}>Save</button>
                </div>
          <ToastContainer />
        </div>
      );
}