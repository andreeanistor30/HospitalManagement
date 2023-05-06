import DoctorBody from "../components/DoctorBody"
import Header from "../components/Header"
import manimage from "../images/doctor-page/doctor.png"
import womanimage from "../images/doctor-page/doctor1.png"
export default function DoctorPage(){
    return (
        <div>
            <Header 
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}/> 
            <DoctorBody />
        </div>
    )
}