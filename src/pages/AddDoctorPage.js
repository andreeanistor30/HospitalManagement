import AddDoctorBody from "../components/AddDoctorBody";
import Header from "../components/Header";
import admin from "../images/admin-page/software-engineer.png"
export default function AddDoctorPage(){
    return(
        <div>
        <Header 
            img={admin}
            txt={(JSON.parse(localStorage.getItem("user"))).username}/> 
        <AddDoctorBody />
        </div>
    )
}