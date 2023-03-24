import axios from "axios"; 
import {hostAPI} from '../configs'
import getAccessToken from "../getAccessToken";

const createPost = async (title, postcontent)=>{ 
  const accessToken = await getAccessToken()  

    return  await axios.post(`${hostAPI}/post`, {
        "title": title,
        "postcontent": postcontent
      },
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
        return error.response.data.message
      });
}
export default createPost


