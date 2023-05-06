import axios from "axios"
import {GET_PATIENTS_ANALYSISRESULT} from "../utils/UrlConstants"
export default async (identityno) => {
    try{
        const response = await axios.get(GET_PATIENTS_ANALYSISRESULT+'?identityNo='+identityno);
        return response.data;
    }catch(error){
        return {
            isError: true
        }
    }
}