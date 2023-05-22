import "../styles/DoctorTableRow.css"
import "../styles/PatientInfo.css"
export default function PatientInfoRow ({firstcolumn,firstname,diagnostic,nationality}){
    return (
        <div className="doctor-tablerow-container">
        <div className="doctor-tablerow-div">
        <img src={firstcolumn} className="age-image" />
        <h3 className="full-name">{firstname}</h3>
        <h3 className="diag">{diagnostic}</h3>
        <h3 className="nationality-table">{nationality}</h3>
      </div>
      </div>
    )
}