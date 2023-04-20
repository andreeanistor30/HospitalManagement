import nurseimg from "../images/nurse-page/nurse.png"
import Header from '../components/Header'
import ChangePassword from "../components/ChangePassword"
export default function ChangePasswordPage(){

    return(
        <div>
            <Header
            img={nurseimg}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <ChangePassword />
        </div>
    )
}