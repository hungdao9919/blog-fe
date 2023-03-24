import axios from "axios";
import {hostAPI} from '../configs' 
import getAccessToken from "../getAccessToken";
const getProfileInfo = async ()=>{ 
    const accessToken = await getAccessToken()  
    return  await axios.get(`${hostAPI}/user`,
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
         
        return response.data
      })
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default getProfileInfo;