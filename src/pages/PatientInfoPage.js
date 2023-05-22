import React,{useState} from "react"
import womanimage from "../images/doctor-page/doctor1.png"
import manimage from "../images/doctor-page/doctor.png"
import Header from "../components/Header"
import {useEffect} from "react"
import LaboratoryTable from "../components/LaboratoryTable"
import GetPatientsByDoctorNameApi from "../api/GetPatientsByDoctorNameApi"
import man from "../images/doctor-page/man.png"
import woman from "../images/doctor-page/woman.png"
import oldman from "../images/doctor-page/tax-inspector.png"
import oldwoman from "../images/doctor-page/old-woman.png"
import PatientInfoRow from "../components/PatientInfoRow"
export default function PatientInfoPage() {
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: ""
    });
  
    const [response, setResponse] = useState([]);
  
    const getPatients = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.firstName && user.lastName) {
        const response = await GetPatientsByDoctorNameApi(user.firstName, user.lastName);
        setResponse(response);
        console.log(response);
      }
    };
  
    useEffect(() => {
      getPatients();
    }, []);
  
    const handleFormData = (event) => {
      const { name, value } = event.target;
      setData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value
        };
      });
    };
  
    const user = JSON.parse(localStorage.getItem("user"));
    const gender = user?.gender || "";
  
    return (
      <div>
        <Header img={gender === "F" ? womanimage : manimage} txt={user?.firstName} />
  
        <h2 className="analysis-results" style={{ marginTop: "50px" }}>
          Patients list
        </h2>
        <div className="analysis-line" />
  
        <LaboratoryTable firstColumn="#" secondColumn="Full name" thirdColumn="Date of birth" forthColumn="Nationality" />
        {response.length > 0 &&
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
  
            const dateOfBirth = item.personalDetails?.dateOfBirth || "";
            const dateParts = dateOfBirth.split("T"); // Split date and time using 'T'
            const formattedDateOfBirth = dateParts.length > 0 ? dateParts[0] : "";
  
            return (
              <PatientInfoRow
                firstcolumn={image}
                firstname={item.firstName + " " + item.lastName}
                diagnostic={formattedDateOfBirth}
                nationality={item.personalDetails?.nationality}
              />
            );
          })}
      </div>
    );
  }

  
  
  
  
  
  
  