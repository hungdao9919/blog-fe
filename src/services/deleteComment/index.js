import axios from "axios"; 
import {hostAPI} from '../configs'
import getAccessToken from "../getAccessToken";

const deleteComment = async (commentId)=>{ 
  const accessToken = await getAccessToken()   
  console.log('remove comment', commentId)
        
      return  await axios.delete(`${hostAPI}/comment`,
      {
        withCredentials: true,
        headers: {'Accept': 'application/json','Content-Type': 'application/json',Authorization: `Bearer ${accessToken}`},
        data:{
          "commentID":commentId
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
export default deleteComment;


