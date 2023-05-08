import AddNurseBody from "../components/AddNurseBody";
import Header from "../components/Header";
import admin from "../images/admin-page/software-engineer.png"
export default function AddNursePage(){
    return(
        <div>
        <Header 
            img={admin}
            txt={(JSON.parse(localStorage.getItem("user"))).username}
            /> 
            <AddNurseBody />
            </div>
    )
}