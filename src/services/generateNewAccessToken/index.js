import axios from "axios";
import {hostAPI} from '../configs'

const generateNewAcessToken = async ()=>{ 
  
  const accessToken = localStorage.getItem('at')
    return  await axios.get(`${hostAPI}/refresh`, 
    
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
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