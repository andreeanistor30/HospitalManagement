import axios from "axios"
import {GET_PATIENT_BYIDENTITYNO} from "../utils/UrlConstants"
export default async (identityno) => {
    try{
        const response = await axios.get(GET_PATIENT_BYIDENTITYNO+'?identityNo='+identityno, {
           identityNo:identityno
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}