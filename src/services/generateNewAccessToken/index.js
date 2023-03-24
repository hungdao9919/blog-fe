import axios from "axios";
import {hostAPI} from '../configs'

const generateNewAcessToken = async ()=>{ 
   
    return  await axios.get(`${hostAPI}/refresh`, 
    
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
    }, 
      withCredentials: true 
    }
    )
      .then( (response)=> {
        localStorage.setItem('at',response.data.accessToken)
         
        return response.data.accessToken
      })
      .catch( (error)=> {
        return error.message
      });
}
export default generateNewAcessToken