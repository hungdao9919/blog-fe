import axios from "axios";
import {hostAPI} from '../configs' 
 


const logOut = async ()=>{ 
    
     
    
    return  await axios.post(`${hostAPI}/logout`,  
      {
        withCredentials: true
      }
    )
      .then( (response)=> {
        
         
        localStorage.removeItem("key"); 
         
        return response.data.accessToken
      })
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default logOut