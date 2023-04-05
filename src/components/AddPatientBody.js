import React from "react";
import '../styles/AddPatientBody.css'
export default function AddPatientBody(){
    return(
        <div>
            <h2 className="personal-details">Personal Details</h2>
            <div className="line"/>

            <div className="firstname-div">
                <h3 className="h3-firstname">Firstname</h3>
                <input type="search" className="firstname-input" />
                <h3 className="identity-no" >Identity No</h3>
                <input type="search" className="identityno-input" />
            </div>

            <div className="lastname-div">
                <h3 className="h3-lastname">Lastname</h3>
                <input type="search" className="lastname-input" />
                <h3 className="occupation">Occupation</h3>
                <input type="search" className="occupation-input" />
            </div>

            <div className="dateofbirth-div">
                <h3 className="dateofbirth">Date of birth</h3>
                <input type="search" className="dateofbirth-input" />
                <h3 className="gender">Gender</h3>
                <input type="search" className="gender-input" />
            </div>

            <div className="maritalstatus-div">
                <h3 className="maritalstatus">Status</h3>
                <input type="search" className="maritalstatus-input" />
                <h3 className="nationality">Nationality</h3>
                <input type="search" className="nationality-input" />
            </div>

            <div className="religion-div">
                <h3 className="religion">Religion</h3>
                <input type="search" className="religion-input" />
                <h3 className="email">Email</h3>
                <input type="search" className="email-input" />
            </div>

            <h2 className="home-address">Home Address</h2>
            <div className="line"/>

            <div className="city-div">
                <h3 className="city">City</h3>
                <input type="search" className="city-input" />
                <h3 className="district">District</h3>
                <input type="search" className="district-input" />
            </div>

            <div className="address-div">
                <h3 className="address">Address</h3>
                <input type="search" className="address-input" />
                <h3 className="phone-number">Phone</h3>
                <input type="search" className="phone-input" />
            </div>

            <div className="postalcode-div">
                <h3 className="postal-code">Postal code</h3>
                <input type="search" className="postalcode-input" />
            </div>

            <button className="save-button">Save</button>

        </div>
    )
}