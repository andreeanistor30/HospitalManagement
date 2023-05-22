import React from 'react';
import '../styles/PrescriptionMedicine.css';
export default function PrescriptionMedicineRow(props) {
  const { count, medicine, noofdays, route, dosage, className } = props;
  return (
    
    <div className={className}>
      <h3 className="nr-column">{count}</h3>
      <h3 className="medicine-column">{medicine}</h3>
      <h3 className="noofdays-column">{noofdays}</h3>
      <h3 className="route-column">{route}</h3>
      <h3 className="dosage-column">{dosage}</h3>
    </div>
  );
}