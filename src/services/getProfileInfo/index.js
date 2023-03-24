import axios from "axios";
import {hostAPI} from '../configs'
import generateNewAcessToken from "../generateNewAccessToken";

const getProfileInfo = async ()=>{ 
  const object = JSON.parse(localStorage.getItem('key'))
    let acessToken;
    const now = new Date().getTime().toString(); 

    if(now < (object.timestamp  + 19000)) {
      console.log('con han ok post')
      acessToken = object.value 
    }
    else{
      console.log('het han, tao token moi')
      acessToken = await generateNewAcessToken()  

    }
    console.log(acessToken)
    return  await axios.get(`${hostAPI}/user`,
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
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default getProfileInfo;