import axios from "axios"
import {ADD_URL_PATIENT} from "../utils/UrlConstants"
export default async (firstName, lastName ,doctorName) => {
    try{
        const response = await axios.post(ADD_URL_PATIENT,{
            firstName: firstName,
            lastName: lastName,
            doctorName: doctorName
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}