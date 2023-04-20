import axios from "axios"
import {DELETE_PATIENT} from "../utils/UrlConstants"
export default async (id) => {
    try{
        const response = await axios.delete(DELETE_PATIENT+"?id="+id)
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}