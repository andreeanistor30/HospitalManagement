import axios from "axios"
import {DELETE_DOCTOR_OR_NURSE} from "../utils/UrlConstants"
export default async (identityNo,type) => {
    try{
        const response = await axios.delete(DELETE_DOCTOR_OR_NURSE+"?identityNo="+identityNo+"&type="+type);
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}