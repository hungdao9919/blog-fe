import axios from "axios";
import {hostAPI} from '../configs'  
const search = async (searchString)=>{     
     
    return  await axios.get(`${hostAPI}/search?query=${searchString}`)
      .then( (response)=> {   
        return response

      })
      .catch( (error)=> {
        return error.response
      });
}
export default search;