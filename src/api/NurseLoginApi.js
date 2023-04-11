import axios from "axios"
import {LOGIN_URL_NURSE} from "../utils/UrlConstants"
export default async (username, password) => {
    try{
        const response = await axios.post(LOGIN_URL_NURSE,{
            username: username,
            password: password
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}