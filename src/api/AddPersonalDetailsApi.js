import axios from "axios"
import {ADD_DETAILS_URL_PATIENT} from "../utils/UrlConstants"
export default async (firstName, lastName ,dateofbirth,maritalstatus,religion,identityno,occupation,gender,nationality,email) => {
    try{
        const response = await axios.post(ADD_DETAILS_URL_PATIENT,{
            firstName: firstName,
            lastName: lastName,
            dateofbirth : dateofbirth,
            maritalstatus: maritalstatus,
            religion: religion,
            identityno: identityno,
            occupation: occupation,
            gender: gender,
            nationality: nationality,
            email: email
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}