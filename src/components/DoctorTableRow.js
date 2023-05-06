import React, { useState } from "react";
import Modal from "./Modal";
import image from "../images/doctor-page/edit.png";
import "../styles/DoctorTableRow.css";
import labImg from "../images/doctor-page/lab-equipment.png";
import AnalysisDiv from "./AnalysisDiv";
import Glucose from "../images/doctor-page/glucose.png";
import Potassium from "../images/doctor-page/potassium.png";
import Sodium from "../images/doctor-page/low-sodium.png";
import Calcium from "../images/doctor-page/calcium.png";
import Creatinine from "../images/doctor-page/kidney.png";
import Chloride from "../images/doctor-page/chloride-test.png";
import Protein from "../images/doctor-page/enzyme.png";
import Magnesium from "../images/doctor-page/magnesium.png";
import Bilirubin from "../images/doctor-page/bilirubin-test.png";
import GetPatientAnalysisResult from "../api/GetPatientAnalysisResult";

export default function TableRow({
  firstcolumn,
  firstname,
  diagnostic,
  identityno
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resp, setResponse] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const onClickButton = async() => {
    const response = await GetPatientAnalysisResult(identityno);
    if (response.length > 0) {
      setResponse(response.map((item) => {
        const [min, max] = item.range.split('-').map(parseFloat);
        const result = parseFloat(item.result);
        const isInRange = !isNaN(min) && !isNaN(max) && !isNaN(result) && result >= min && result <= max;
        return {
          testName: item.testName,
          result: item.result,
          range: item.range,
          isInRange: isInRange
        };
      }));
    }
    openModal();
  };

  return (
    <div className="doctor-tablerow-container">
      <div className="doctor-tablerow-div">
        <img src={firstcolumn} className="age-image" />
        <h3 className="full-name">{firstname}</h3>
        <h3 className="diag">{diagnostic}</h3>
        <img src={image} className="edit" onClick={() => onClickButton()} />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <>
            <img src={labImg} className="laboratory-image" />
            <div className="analysis-div-row-container">
              {resp.map((item, index) => {
                const imgSrc = getImageSrc(item.testName);
                const divClassName = item.isInRange ? 'analysis-div-green' : 'analysis-div-red';
                return (
                  <div className={divClassName}>
                    <AnalysisDiv
                      img={imgSrc}
                      txt={item.testName}
                      txt2={item.result + " " + result(item.testName)}
                    />
                  </div>
                );
              })}
            </div>
          </>
        </Modal>
      )}
    </div>
  );
}

function getImageSrc(testName) {
  switch (testName) {
    case "Glucose":
      return Glucose;
    case "Potassium":
      return Potassium;
    case "Sodium":
      return Sodium;
    case "Calcium":
      return Calcium;
    case "Creatinine":
      return Creatinine;
    case "Chloride":
      return Chloride;
    case "Protein":
      return Protein;
    case "Magnesium":
      return Magnesium;
    case "Bilirubin, total":
      return Bilirubin;
    case "Bilirubin, direct":
        return Bilirubin;
    default:
      return null;
  }
}

function result(result){
    switch(result){
        case "Glucose":
        case "Calcium":
        case "Creatinine":
        case "Bilirubin, direct":
        case "Bilirubin, total":
          return "mg/dL";
        case "Sodium":
        case "Potassium":
        case "Chloride":
          return "mmol/L";
        case "Protein":
        case "Magnesium":
          return "g/dL";
      }
}