import axios from "axios";
import {hostAPI} from '../configs'  
const getPublicComment = async (data)=>{     
    let urlApi
    if(data.userId){
      urlApi = `${hostAPI}/public-comments?userId=${data.userId}&pageNo=${data.pageNo}`
    }
    else if(data.postId){
      urlApi = `${hostAPI}/public-comments?postId=${data.postId}&pageNo=${data.pageNo}` 
    }
    return  await axios.get(urlApi)
      .then( (response)=> {   
        return response

      })
      .catch( (error)=> {
        return error.response
      });
}
export default getPublicComment;