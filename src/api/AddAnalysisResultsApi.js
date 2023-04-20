import axios from "axios"
import {ADD_ANALYSIS_RESULT} from "../utils/UrlConstants"
export default async (identityno,body) => {
    try{
        console.log(body)
        const response = await axios.post(ADD_ANALYSIS_RESULT+'?identityNo='+identityno,body)
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}