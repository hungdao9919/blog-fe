import axios from "axios";
import {hostAPI} from '../configs'

const logIn = async (username,password)=>{ 
    return  await axios.post(`${hostAPI}/login`, {
        "username": username,
        "password": password
      },
      {
        withCredentials: true
      }
    )
      .then( (response)=> {
        const object = {value: response.data.accessToken, timestamp: new Date().getTime()}
        localStorage.setItem("key", JSON.stringify(object)); 
        return response.data.accessToken
      })
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default logIn