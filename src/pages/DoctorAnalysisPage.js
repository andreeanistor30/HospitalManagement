import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import womanimage from "../images/doctor-page/doctor1.png";
import manimage from "../images/doctor-page/doctor.png";
import LaboratoryTable from "../components/LaboratoryTable";
import DoctorTableRow from "../components/DoctorTableRow";
import GetPatientsByDoctorNameApi from "../api/GetPatientsByDoctorNameApi";
import man from "../images/doctor-page/man.png";
import woman from "../images/doctor-page/woman.png";
import oldman from "../images/doctor-page/tax-inspector.png";
import oldwoman from "../images/doctor-page/old-woman.png";

export default function DoctorAnalysisPage() {
  const [identityData, setIdentityData] = useState({
    identityno: "",
  });

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.firstName && user.lastName) {
        const response = await GetPatientsByDoctorNameApi(user.firstName, user.lastName);
        setResponse(response);
      }
    };

    fetchData();
  }, []);

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setIdentityData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const headerImg = user && user.gender === 'F' ? womanimage : manimage;
  const headerTxt = user ? user.firstName : '';

  return (
    <div>
      <Header img={headerImg} txt={headerTxt} />
      <h2 className="analysis-results" style={{ marginTop: "50px" }}>
        Analysis Results
      </h2>
      <div className="analysis-line" />
      <LaboratoryTable firstColumn="#" secondColumn="Full name" thirdColumn="Diagnostic" />
      {response.length > 0 ? (
        response.map((item) => {
          let image = null;
          if (item.personalDetails?.gender === "M" && item.personalDetails?.age >= 60) {
            image = oldman;
          } else if (item.personalDetails?.gender === "F" && item.personalDetails?.age >= 60) {
            image = oldwoman;
          } else if (item.personalDetails?.gender === "M") {
            image = man;
          } else {
            image = woman;
          }
          return (
            <DoctorTableRow
              key={item.id} // Add a unique key prop for each item in the array
              firstcolumn={image}
              firstname={item.firstName + " " + item.lastName}
              diagnostic={item.diagnostic}
              identityno={item.personalDetails?.identityNo}
            />
          );
        })
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
}