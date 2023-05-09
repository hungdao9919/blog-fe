import axios from "axios";
import {hostAPI} from '../configs'  
 
  const getPublicPosts = async (data)=>{   
    let urlApi;
    if(data?.postId){
      console.log('chi co post id')
      urlApi = `${hostAPI}/public-posts?postId=${data.postId}`
    }
    else if(data?.userId){
      console.log('co user id')
      const pageNo = data?.pageNo ? data.pageNo : 1  
      urlApi = `${hostAPI}/public-posts?pageNo=${pageNo}&userId=${data.userId}`
    }
    else{
      console.log('get all post') 
      urlApi = `${hostAPI}/public-posts?pageNo=${data.pageNo}`
    }
    return  await axios.get(urlApi)
      .then( (response)=> {  
        return response.data

      })
      .catch( (error)=> {
        return error.response.data
      });
}
export default getPublicPosts;