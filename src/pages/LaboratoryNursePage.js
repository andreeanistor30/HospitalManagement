import nurseimg from "../images/nurse-page/nurse.png"
import Header from '../components/Header'
import Laboratory from "../components/Laboratory"
import LaboratoryTable from "../components/LaboratoryTable"
import LaboratoryTableRow from "../components/LaboratoryTableRow"
export default function LaboratoryNursePage(){
    return(
        <div>
            <Header
            img={nurseimg}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <Laboratory />
            <LaboratoryTable />

            <LaboratoryTableRow
            txt={'Glucose'}
            units={'mg/dL'}
            referenceRange={'65-125'} />

            <LaboratoryTableRow
            txt={'Sodium'}
            units={'mmol/L'}
            referenceRange={'136-144'} />
            

        </div>
    )
}