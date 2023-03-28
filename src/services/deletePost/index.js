import axios from "axios"; 
import {hostAPI} from '../configs'
import getAccessToken from "../getAccessToken";

const deletePost = async (postID)=>{ 
  const accessToken = await getAccessToken()   
        
      return  await axios.delete(`${hostAPI}/post`,
      {
        withCredentials: true,
        headers: {'Accept': 'application/json','Content-Type': 'application/json',Authorization: `Bearer ${accessToken}`},
        data:{
          "postID":postID
        }
      }, 
       
       
    )
      .then( (response)=> { 
        return response
      })
      .catch(async (error)=> { 
        return error.response 
      });
}
export default deletePost;


