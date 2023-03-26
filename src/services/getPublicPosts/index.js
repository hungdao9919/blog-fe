import axios from "axios";
// import {hostAPI} from '../configs'  
const getPublicPosts = async ()=>{ 
    //http://34.125.251.148:3000/public-posts
    return  await axios.get('http://localhost:3001/public-posts')
      .then( (response)=> {  
        return response.data

      })
      .catch( (error)=> {
        return error.response.data
      });
}
export default getPublicPosts;