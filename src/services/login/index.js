import axios from "axios";

const logIn = async (username,password)=>{ 
    return  await axios.post('http://34.125.251.148:3000/login', {
        "username": username,
        "password": password
      },
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // withCredentials: true,
      }
    )
      .then( (response)=> {
        localStorage.setItem('at',response.data.accessToken)
        return response.data.accessToken
      })
      .catch( (error)=> {
        return error.response.data.message
      });
}
export default logIn