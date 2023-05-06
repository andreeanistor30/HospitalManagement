import React from "react";
import '../styles/LaboratoryPatientRow.css'
export default function LaboratoryPatientRow({
  value,
  testName,
  units,
  referenceRange,
}) {
  const [min, max] = referenceRange.split("-");
  const numericValue = parseFloat(value);
  const inRange = numericValue >= parseFloat(min) && numericValue <= parseFloat(max);
  const className = inRange ? "glucose-div-in-range" : "glucose-div-out-of-range";
  
  return (
    <div className="glucose-div">
      <h3 className="text">{testName}</h3>
      <input type="text" className={className} value={value} readOnly />
      <h3 className="units-text">{units}</h3>
      <h3 className="reference-range-text">{referenceRange}</h3>
    </div>
  );
}