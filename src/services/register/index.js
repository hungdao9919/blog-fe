import axios from "axios";
import {hostAPI} from '../configs'

const register = async (username, password, email, lastname, firstname, profileImage)=>{ 
    return  await axios.post(`${hostAPI}/register`, {
        "username": username,
        "password": password,
        "email":email,
        "lastname":lastname,
        "firstname":firstname,
        "profileImage":profileImage,
      },
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // withCredentials: true,
      }
    )
      .then( (response)=> {
        const object = {value: response.data.accessToken, timestamp: new Date().getTime()}
        localStorage.setItem("key", JSON.stringify(object));  
         return {status: response.status,accessToken: response.data.accessToken}
      })
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default register