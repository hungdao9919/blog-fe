import axios from "axios"; 
import {hostAPI} from '../configs'
import getAccessToken from "../getAccessToken";

const updateUser = async (data)=>{ 
  const accessToken = await getAccessToken()   
    return  await axios.put(`${hostAPI}/user`, data,
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
      .catch(async (error)=> { 
        return error.response.data
      });
}
export default updateUser


