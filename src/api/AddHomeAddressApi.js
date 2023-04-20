import axios from "axios"
import {ADD_ADDRESS_URL_PATIENT} from "../utils/UrlConstants"
export default async (firstname,lastname,city,address,postalcode, district , phone ) => {
    try{
        const response = await axios.post(ADD_ADDRESS_URL_PATIENT,{
            firstName: firstname,
            lastName:lastname,
            city: city,
            district: district,
            address: address,
            phoneNumber: phone,
            postalCode: postalcode
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}