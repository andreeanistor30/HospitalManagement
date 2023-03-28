import DoctorBody from "../components/DoctorBody"
import Header from "../components/Header"
import image from "../images/doctor-page/doctor1.png"
export default function DoctorPage(){
    return (
        <div>
            <Header 
            img={image}
            txt={'Name'}/> 
            <DoctorBody />
        </div>
    )
}