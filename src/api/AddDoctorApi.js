import axios from "axios"
import {ADD_DOCTOR} from "../utils/UrlConstants"
export default async (firstname, lastname, dateofbirth, address, phone, username, password, gender) => {
    try{
        const response = await axios.post(ADD_DOCTOR,{
            firstName: firstname,
            lastName: lastname,
            dateOfBirth: dateofbirth,
            address: address,
            phone: phone,
            username: username,
            password: password,
            gender: gender
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}