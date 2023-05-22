import React from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import AddDoctorApi from "../api/AddDoctorApi"
import "../styles/AddNurseBody.css"

export default function AddNurseBody() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    address: "",
    phone: "",
    username: "",
    password: "",
    gender: "F", // default to "F" to avoid empty string value
    identityNo: ""
  })

  const onClickAddDoctor = async () => {
    const response = await AddDoctorApi(
      formData.firstname,
      formData.lastname,
      formData.dateofbirth,
      formData.address,
      formData.phone,
      formData.username,
      formData.password,
      formData.gender,
      formData.identityNo
    )
    if (response.isError)
      toast.error("Invalid data");
    else
      toast.success("Insert successfully");
  }

  const handleFormData = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  return (
    <div>
      <h3 className="personal-details-h3">Personal details</h3>
      <div className="f-row-div">
        <h3 className="f-row-txt">Firstname</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.firstname}
          name="firstname"
          autoComplete="off"
        />
        <h3 className="f-row-txt1">Phone</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.phone}
          name="phone"
          autoComplete="off"
        />
      </div>

      <div className="f-row-div">
        <h3 className="f-row-txt">Lastname</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.lastname}
          name="lastname"
          autoComplete="off"
        />
        <h3 className="f-row-txt1">Username</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.username}
          name="username"
          autoComplete="off"
        />
      </div>

      <div className="f-row-div">
        <h3 className="f-row-txt">Date of birth</h3>
        <input
          type="date"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.dateofbirth}
          name="dateofbirth"
          autoComplete="off"
        />
        <h3 className="f-row-txt1">Password</h3>
        <input
          type="password"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.password}
          name="password"
          autoComplete="off"
        />
      </div>

      <div className="f-row-div">
        <h3 className="f-row-txt">Address</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.address}
          name="address"
          autoComplete="off"
        />
        <h3 className="f-row-txt1">Gender</h3>
        <select
          name="gender"
          className="dropdown-gender"
          onChange={handleFormData}
          value={formData.gender}
        >
          <option value="F">F</option>
          <option value="M">M</option>
        </select>

      </div>
      <div className="identity-div">
        <h3 className="ident-no-h3">Identity no</h3>
        <input
          type="number"
          className="ident-no-input"
          onChange={handleFormData}
          value={formData.identityNo}
          name="identityNo"
          autocomplete="off"
        />
      </div>
      <ToastContainer />
      <button className="add-btn" onClick={onClickAddDoctor}>Add</button>
    </div>
  )
}