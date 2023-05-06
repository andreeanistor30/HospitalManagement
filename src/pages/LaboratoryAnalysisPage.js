import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import manimage from "../images/patient-page/man.png"
import womanimage from "../images/patient-page/woman.png"
import oldman from "../images/doctor-page/old-man.png"
import oldwoman from "../images/doctor-page/grandmother.png"
import LaboratoryTable from "../components/LaboratoryTable";
import LaboratoryPatientRow from "../components/LaboratoryPatientRow";
import GetResultsApi from "../api/GetResultsApi";

export default function LaboratoryAnalysisPage(){
    let image;
    const [response, setResponse] = useState([]);

    if ((JSON.parse(localStorage.getItem("user"))).gender === "M" && (JSON.parse(localStorage.getItem("user"))).age > 60) {
            image = oldman;
          } else if ((JSON.parse(localStorage.getItem("user"))).gender === "F" && (JSON.parse(localStorage.getItem("user"))).age>= 60) {
            image = oldwoman;
          } else if ((JSON.parse(localStorage.getItem("user"))).gender === "M") {
            image = manimage;
          } else {
            image = womanimage;
          }

    const getPatients = async () =>{
      const result = await GetResultsApi();
      console.log(result);
      setResponse(result);
    }

    useEffect(() => {
      getPatients()
  }, []);

    return(
        
        <div>
            <Header
            img={image}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <h2 style={{marginBottom: '50px'}}>My analysis</h2>
            <LaboratoryTable 
                firstColumn="Test name"
                secondColumn="Results"
                thirdColumn="Units"
                forthColumn="Reference range"
            />
            {response !== undefined && response.map((item =>(
           <LaboratoryPatientRow
           value={item.result}
           testName={item.testName}
           units={item.units}
           referenceRange={item.range}
       />
           )))} 
        </div>
    );
}