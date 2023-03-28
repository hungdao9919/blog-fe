import axios from "axios";
import {hostAPI} from '../configs'
import logOut from '../logOut'
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
        const object = {value: response.data.accessToken, timestamp: new Date().getTime()}
        localStorage.setItem("key", JSON.stringify(object));   
        return response.data.accessToken
      })
      .catch( async (error)=> {
        await logOut() 
        window.location.reload()
        return error.message
      });
}
export default generateNewAcessToken