import React from "react"
import { useState } from "react"
import AddNurseApi from "../api/AddNurseApi"
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
  })

  const onClickAddNurse = async () => {
    const response = await AddNurseApi(
      formData.firstname,
      formData.lastname,
      formData.dateofbirth,
      formData.address,
      formData.phone,
      formData.username,
      formData.password,
      formData.gender
    )
    return response
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
        />
        <h3 className="f-row-txt1">Phone</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.phone}
          name="phone"
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
        />
        <h3 className="f-row-txt1">Username</h3>
        <input
          type="search"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.username}
          name="username"
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
        />
        <h3 className="f-row-txt1">Password</h3>
        <input
          type="password"
          className="f-row-in"
          onChange={handleFormData}
          value={formData.password}
          name="password"
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
                <button className="add-btn" onClick={onClickAddNurse}>Add</button>
        </div>
    )
}