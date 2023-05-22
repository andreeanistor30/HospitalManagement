import Header from "../components/Header"
import PrescriptionMedicine from "../components/PrescriptionMedicine";
import manimage from "../images/doctor-page/doctor.png"
import womanimage from "../images/doctor-page/doctor1.png"
export default function PrescriptionMedicinePage(){
    let image;
    if ((JSON.parse(localStorage.getItem("user"))).gender === "M" ) 
            image = manimage;
    else 
            image=womanimage;
    return (
        <div>
        <Header 
        img={image}
        txt={(JSON.parse(localStorage.getItem("user"))).firstName}/> 
        <PrescriptionMedicine />
        </div>
        
    )
}