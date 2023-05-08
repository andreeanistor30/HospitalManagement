import axios from "axios"
import {CHANGE_PASSWORD} from "../utils/UrlConstants"
export default async (password,phone) => {
    try{
        const response = await axios.put(CHANGE_PASSWORD+"?password="+password+"&phone="+phone);
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}