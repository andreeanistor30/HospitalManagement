import axios from "axios"
import {ADD_VITAL_SIGNS_URL_PATIENT} from "../utils/UrlConstants"
export default async (identityno,weight,respiratoryrate,bloodsugar,height,heartrate,temperature,bloodpressure,allergytype,allergen) => {
    try{
        const response = await axios.post(ADD_VITAL_SIGNS_URL_PATIENT,{
            identityNo:identityno,
            weight:weight,
            respiratoryRate:respiratoryrate,
            bloodSugar:bloodsugar,
            height:height,
            heartRate:heartrate,
            temperature:temperature,
            bloodPressure:bloodpressure,
            allergyType:allergytype,
            allergen:allergen
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}