import axios from "axios";
import generateNewAcessToken from "../generateNewAccessToken";
import {hostAPI} from '../configs'

const createPost = async (title, postcontent)=>{ 
    const object = JSON.parse(localStorage.getItem('key'))
    let acessToken;
    const now = new Date().getTime().toString();
    console.log('time stamp',object.timestamp )
    console.log('now',now)

    if(now < (object.timestamp  + 19000)) {
      console.log('con han ok post')
      acessToken = object.value
      console.log(acessToken)
    }
    else{
      console.log('het han, tao token moi')
      acessToken = await generateNewAcessToken() 
      console.log(acessToken)

    }
    console.log(acessToken)
    return  await axios.post(`${hostAPI}/post`, {
        "title": title,
        "postcontent": postcontent
      },
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${acessToken}`
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


