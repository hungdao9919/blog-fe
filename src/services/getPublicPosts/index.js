import axios from "axios";
import {hostAPI} from '../configs'  
const getPublicPosts = async (pageNo,userId='',postId='')=>{  
    return  await axios.get(`${hostAPI}/public-posts?pageNo=${pageNo}&userId=${userId}&postId=${postId}`,)
      .then( (response)=> {  
        return response.data

      })
      .catch( (error)=> {
        return error.response.data
      });
}
export default getPublicPosts;