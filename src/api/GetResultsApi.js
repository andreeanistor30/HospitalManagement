import axios from "axios"
import {GET_RESULTS} from "../utils/UrlConstants"
export default async () => {
    try{
        const response = await axios.get(GET_RESULTS);
        return response.data;
    }catch(error){
        return {
            isError: true
        }
    }
}