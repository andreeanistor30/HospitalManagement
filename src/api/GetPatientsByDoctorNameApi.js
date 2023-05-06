import axios from "axios"
import {GET_PATIENTS_BYDOCTOR} from "../utils/UrlConstants"
export default async (firstName,lastName) => {
    try{
        const response = await axios.get(GET_PATIENTS_BYDOCTOR+"?firstName="+firstName+"&lastName="+lastName);
        return response.data;
    }catch(error){
        return {
            isError: true
        }
    }
}