import axios from "axios"
import {ADD_ADDRESS_URL_PATIENT} from "../utils/UrlConstants"
export default async (city, district ,address, phone, postalcode) => {
    try{
        const response = await axios.post(ADD_ADDRESS_URL_PATIENT,{
            city: city,
            district: district,
            address: address,
            phone: phone,
            postalcode: postalcode
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}