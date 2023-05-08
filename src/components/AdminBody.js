import nurse from "../images/admin-page/nurse.png"
import doctor from "../images/admin-page/doctor.png"
import "../styles/DoctorBody.css"
import { useNavigate } from "react-router-dom";

export default function AdminBody(){
    const navigate = useNavigate();
    const onClickAddNurse = () => {
        navigate("/addnurse")
    }
    const onClickAddDoctor = () =>{
        navigate("/adddoctor")
    }
    return(
        <div>
            <h2 className="dashboard">Dashboard</h2>
            <div className="first-row">
                <img src={nurse} className="info-photo" />
                <img src={doctor} className="diagnostic-photo" />
            </div>
            <div className="first-row-buttons">
                <button className="info-button" onClick={onClickAddNurse}>ADD NURSE</button>
                <button className="diagnostic-button" onClick={onClickAddDoctor}>ADD DOCTOR</button>
            </div>
        </div>
    )
}