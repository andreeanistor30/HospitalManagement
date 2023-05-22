import React, {useState} from "react";
import womanimage from "../images/nurse-page/nurse.png"
import manimage from "../images/nurse-page/man-nurse.png"
import Header from '../components/Header'
import Laboratory from "../components/Laboratory"
import LaboratoryTable from "../components/LaboratoryTable"
import LaboratoryTableRow from "../components/LaboratoryTableRow"
import GetLaboratoryAnalysis from "../api/GetLaboratoryAnalysis"
import { useEffect} from "react";
import "../styles/LaboratoryNursePage.css"
import AddAnalysisResultsApi from "../api/AddAnalysisResultsApi";
import { toast } from "react-toastify";
export default function LaboratoryNursePage(){
    const [data, setData] = useState(undefined);
    const laboratoryAnalysis = async () => {
        const response = await GetLaboratoryAnalysis();
        setData(response.map(r => ({
            ...r,
            value: 0
        })))
    }

    useEffect(() => {
        laboratoryAnalysis()
    }, []);

    let count = 1;

    const handleFieldChange = (index, event) => {
        const newData= [...data];
        newData[index][event.target.name] = event.target.value;
        setData(newData);
    };

    const save =async () => {
        const body = data.map(d => ({
            testName: d.testName,
            result: d.value
        }))
        const response = await AddAnalysisResultsApi(identityData.identityno,  body);
        if(response.isError)
            toast.error("Invalid data");
        else
            toast.error("Insert successfully");
    }

    const [identityData,setIdentityData] = useState({
        identityno:""
    });

    const handleFormData = (event) => {
        const { name, value } = event.target
        setIdentityData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return(
        <div>
            <Header
            img={(JSON.parse(localStorage.getItem("user"))).gender === 'F' ? womanimage : manimage}
            txt={(JSON.parse(localStorage.getItem("user"))).firstName}
            />
            <Laboratory 
            laboratorydata={identityData.identityno}
            onChangeLaboratory={handleFormData}
            />
             <LaboratoryTable 
                firstColumn="Test name"
                secondColumn="Results"
                thirdColumn="Units"
                forthColumn="Reference range"
            />
            {data !== undefined && data.map(((item, index) =>(
            <LaboratoryTableRow
                item={item}
                handleFieldChange={handleFieldChange}
                index={index}
            />
        )))}
             <button className="btn" onClick={save}>Save</button> 
        </div>
    )
}