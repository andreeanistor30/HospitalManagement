import React, {useState} from "react";
import image from "../images/nurse-page/nurse.png"
import Header from "../components/Header"
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import DischargePatientApi from "../api/DischargePatientApi";
import { useEffect} from "react";
import womanimage from "../images/nurse-page/nurse.png"
import manimage from "../images/nurse-page/man-nurse.png"
export default function NurseDischargePatientPage() {
    let count = 1;
    const [response, setResponse] = useState(undefined);
    const dischargePatient = async () => {
        setResponse(await DischargePatientApi());
    }

    const [formData, setFormData] = useState({
        filter: "",
        name: ""
    })

    useEffect(() => {
        dischargePatient()
    }, []);

    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return (
        <div>
            <Header
                img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
                txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <TableHeader 
            onChange={handleFormData}
            value={formData.filter}
            name='filter'
            inputValue={formData.name}
            inputName='name'
            setResponse={setResponse}
            />
            {response !== undefined && response.map((item =>(
            <TableRow
                firstcolumn={count++}
                firstname={item.firstName}
                lastname={item.lastName}
                diagnostic={item.diagnostic}
                doctor = {item.doctorName}
                id={item.id}
                getPatient={dischargePatient} 
            />
        )))}
        </div>
    )
}