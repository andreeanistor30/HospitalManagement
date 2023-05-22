import axios from "axios"
import {GET_PATIENTS} from "../utils/UrlConstants"
export default async () => {
    try{
        const response = await axios.get(GET_PATIENTS)
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}