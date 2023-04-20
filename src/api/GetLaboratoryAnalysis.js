import axios from "axios"
import {GET_LABORATORY_ANALYSIS} from "../utils/UrlConstants"
export default async () => {
    try{
        const response = await axios.get(GET_LABORATORY_ANALYSIS);
        return response.data;
    }catch(error){
        return {
            isError: true
        }
    }
}