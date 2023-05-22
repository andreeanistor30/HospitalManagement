import axios from "axios"
import {INSERT_DIAGNOSTIC} from "../utils/UrlConstants"
export default async (diagnostic,identityno) => {
    try{
        const response = await axios.post(INSERT_DIAGNOSTIC+'?diagnostic='+diagnostic+"&identityno="+identityno);
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}