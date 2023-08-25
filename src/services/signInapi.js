import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function Authenticate(email,pass){

    const url =createUrl('/api/auth/signin')
    const body = {
      email: email,
      password: pass
    };

      try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }

}