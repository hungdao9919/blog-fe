import styles from './Login.module.scss'
import {useState} from 'react'  
import LogIn from '../../services/login' 
import {  useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from "react-router-dom";


function Login(){ 
    const globalContext = useContext(GlobalContext) 
    const navigate = useNavigate();

    const isLogged = globalContext.isLogged  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
 
     const handleSubmit =async (e)=>{
            e.preventDefault(); 
            const loginResult = await LogIn(username,password) 
            navigate(0)



    }

     
    const loginForm =  <div className={styles.login_wrapper}>
    <form onSubmit={handleSubmit}>
        <div className={styles.login_container}>
            <label htmlFor="uname"><b>Username</b></label>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" name="uname" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
           
        </div>
    </form>
    
</div>
    const result = isLogged ?<h2>Loading</h2>: loginForm
    return  result
}
export default Login;