import axios from "axios"
import {ADD_NURSE} from "../utils/UrlConstants"
export default async (firstname, lastname, dateofbirth, address, phone, username, password, gender,identityNo) => {
    try{
        const response = await axios.post(ADD_NURSE,{
            firstName: firstname,
            lastName: lastname,
            dateOfBirth: dateofbirth,
            address: address,
            phone: phone,
            username: username,
            password: password,
            gender: gender,
            identityNo: identityNo
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}