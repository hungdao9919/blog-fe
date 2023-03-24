import generateNewAcessToken from "../generateNewAccessToken";

const getAccessToken = async ()=>{ 

    const object = JSON.parse(localStorage.getItem('key'))
        let accessToken;
        const now = new Date().getTime().toString(); 
    
        if(now < (object.timestamp  + 19000)) {
          console.log('con han ok post')
         return accessToken = object.value 
        }
        else{
          console.log('het han, tao token moi')
          return accessToken = await generateNewAcessToken()  
    
        } 
}

export default getAccessToken
