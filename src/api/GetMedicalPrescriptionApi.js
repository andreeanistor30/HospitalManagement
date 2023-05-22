import axios from "axios"
import {GET_MEDICAL_PRESCRIPTION} from "../utils/UrlConstants"
export default async (identityNo) => {
    try{
        const response = await axios.get(GET_MEDICAL_PRESCRIPTION+'?identityNo='+identityNo,{
            identityNo: identityNo
        });
        return response.data;
    }catch(error){
        return {
            isError: true
        }
    }
}