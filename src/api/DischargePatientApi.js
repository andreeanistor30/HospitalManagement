import axios from "axios"
import {GET_PATIENTS} from "../utils/UrlConstants"
export default async (city, district ,address, phone, postalcode) => {
    try{
        const response = await axios.get(GET_PATIENTS)
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}