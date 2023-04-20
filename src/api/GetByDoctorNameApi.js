import axios from "axios"
import {GET_DOCTORS_BYNAME} from "../utils/UrlConstants"
export default async (firstName,lastName) => {
    try{
        const response = await axios.get(GET_DOCTORS_BYNAME+'?firstname='+firstName+"&lastname="+lastName, {
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