import axios from "axios"
import {GET_DETAILS} from "../utils/UrlConstants"
export default async (firstName,lastName) => {
    try{
        const response = await axios.get(GET_DETAILS+'?firstName='+firstName+"&lastName="+lastName, {
            firstName : firstName,
            lastName : lastName
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}