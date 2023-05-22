import axios from "axios"
import {ADD_MEDICAL_PRESCRIPTION} from "../utils/UrlConstants"
export default async (identityno, medicine, route, dosage, noofdays, instruction) => {
    try{
        const response = await axios.post(ADD_MEDICAL_PRESCRIPTION+'?identityno='+identityno+'&medicine='+medicine+'&route='+route+'&dosage='+dosage+'&noofdays='+noofdays+'&instruction='+instruction,{
            identityno:identityno,
            medicine: medicine,
            route: route,
            dosage: dosage,
            noofdays: noofdays,
            instruction: instruction
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}