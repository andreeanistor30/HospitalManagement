import axios from "axios"
import {GET_ALL_DOCTORS} from "../utils/UrlConstants"
export default async () => {
    try{
        const response = await axios.get(GET_ALL_DOCTORS)
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}