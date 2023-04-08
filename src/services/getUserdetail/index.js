import axios from "axios";
import {hostAPI} from '../configs'  
const getUserDetail = async (username)=>{   
    return  await axios.get(`${hostAPI}/userinfo?username=${username}`,)
      .then( (response)=> {  
        return response.data

      })
      .catch( (error)=> {
        return error.response.data
      });
}
export default getUserDetail;