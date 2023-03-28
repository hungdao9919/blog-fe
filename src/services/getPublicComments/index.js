import axios from "axios";
import {hostAPI} from '../configs'  
const getPublicComment = async (id)=>{   
    return  await axios.get(`${hostAPI}/public-comments/${id}`)
      .then( (response)=> {   
        return response

      })
      .catch( (error)=> {
        return error.response
      });
}
export default getPublicComment;