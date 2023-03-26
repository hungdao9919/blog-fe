import axios from "axios";
import {hostAPI} from '../configs' 



const logOut = async ()=>{ 
    return  await axios(`${hostAPI}/logout`,{ method:'post', withCredentials: true })
    .then( (response)=> {  
      localStorage.removeItem('key'); 
      return response.data
    })
    .catch( (error)=> {
      return error.response.data.message 
    });
}
export default logOut 