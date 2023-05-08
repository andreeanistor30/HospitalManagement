import AdminBody from "../components/AdminBody"
import Header from "../components/Header"
import admin from "../images/admin-page/software-engineer.png"
export default function AdminPage(){
    return (
        <div>
            <Header 
            img={admin}
            txt={(JSON.parse(localStorage.getItem("user"))).username}/> 
            <AdminBody />
        </div>
    )
}