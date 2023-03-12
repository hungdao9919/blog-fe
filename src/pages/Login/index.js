import styles from './Login.module.scss'
import {useState} from 'react'  
import LogIn from '../../services/login'
import generateNewAcessToken from "../../services/generateNewAccessToken";



function Login(){ 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
 
     const handleSubmit =async (e)=>{
            e.preventDefault(); 
            const loginResult = await LogIn(username,password) 
            console.log(loginResult)
    }

    const handleNewAcessToken = async ()=>{
        const newAcessToken = await generateNewAcessToken()
        console.log(newAcessToken)
    }
    
    return <div className={styles.login_wrapper}>
        <form onSubmit={handleSubmit}>
            <div className={styles.login_container}>
                <label htmlFor="uname"><b>Username</b></label>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit">Login</button>
                {/* <p>{errorLogin && `Lỗi ${errorLogin}` }</p> */}
            </div>
        </form>
        <button onClick={handleNewAcessToken}>Lay ton ken moi </button>
    </div>
}
export default Login;