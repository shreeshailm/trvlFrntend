import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function addCityapi(Name,Pin,State,Country){
    const url=createUrl('/city')
    const body={
        cityName:Name,
        cityPin:Pin,
        cityState:State,
        cityCountry:Country,
    }
    try{
        const response=await axios.post(url,body)
        log(response.data)
        return response.data
    }catch(ex){
        log(ex)
        return null
    }
}