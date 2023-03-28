import axios from "axios"; 
import {hostAPI} from '../configs'
import getAccessToken from "../getAccessToken";

const createComment = async (postid, commentcontent)=>{ 
  const accessToken = await getAccessToken()  

    return  await axios.post(`${hostAPI}/comment`, {
        "postid": postid,
        "commentcontent": commentcontent
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
        return response 
      })
      .catch(async (error)=> { 
        return error.response.data.message
      });
}
export default createComment


