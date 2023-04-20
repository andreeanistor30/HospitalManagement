import axios from "axios"
import {CHANGE_PASSWORD} from "../utils/UrlConstants"
export default async (password,firstname,lastname) => {
    try{
        const response = await axios.put(CHANGE_PASSWORD+"?password="+password+"&firstName="+firstname+"&lastName="+lastname);
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}