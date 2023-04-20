import axios from "axios"
import {ADD_VITAL_SIGNS_URL_PATIENT} from "../utils/UrlConstants"
export default async (identityno,weight,respiratoryrate,bloodsugar,height,heartrate,temperature,bloodpressure,allergytype,allergen) => {
    try{
        const response = await axios.post(ADD_VITAL_SIGNS_URL_PATIENT,{
            identityno:identityno,
            weight:weight,
            respiratoryrate:respiratoryrate,
            bloodsugar:bloodsugar,
            height:height,
            heartrate:heartrate,
            temperature:temperature,
            bloodpressure:bloodpressure,
            allergytype:allergytype,
            allergen:allergen
        })
        return response.data
    }catch(error){
        return {
            isError: true
        }
    }
}