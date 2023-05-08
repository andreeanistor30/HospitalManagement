import axios from "axios"
import {CHANGE_PASSWORD_PATIENT} from "../utils/UrlConstants"
export default async (password,identityNo) => {
    try{
        const response = await axios.put(CHANGE_PASSWORD_PATIENT+"?password="+password+"&identityNo="+identityNo);
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}