import axios from "axios";

const register = async (username, password, email, lastname, firstname, profileImage)=>{ 
    return  await axios.post('http://34.125.251.148:3000/register', {
        "username": username,
        "password": password,
        "email":email,
        "lastname":lastname,
        "firstname":firstname,
        "profileImage":profileImage,
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
export default register