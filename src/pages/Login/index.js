import styles from './Login.module.scss'
import {useState} from 'react'  
import login from '../../services/login'  
import { useNavigate,Link } from "react-router-dom";

import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react' 

function Login(){  
    const {isLogged} = useContext(GlobalContext)  
    const {isLoading, setIsLoading} = useContext(GlobalContext)

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    const [error, setError] =useState('') 
    document.title="Login"
    if(isLogged){
        return navigate('/')
    }
    else{

    
    const handleSubmit = async (e) => {
            e.preventDefault(); 
            setIsLoading(true)
            const result =  await login(username,password) 
            if(result.status ===200){  
                navigate('/')
                navigate(0)     
            }
            else{
                setError(result)
            }
    }
    
 
    return  <div className={styles.login_wrapper}>
    <form onSubmit={handleSubmit}>
       {console.log('Render Login form')}
        <div className={styles.login_container}> 
             
                <label htmlFor="uname"><b>Username</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" name="uname" id="uname" required/>
                </div>
           
                <label htmlFor="psw"><b>Password</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                </div>
 

            <button type="submit">Login</button> 
            {error&& <div className={styles.error_container}>{error}</div>}
            
           <div className={styles.register_container}><p>Do not have an account? <Link className={styles.register_link}  to='/register'>Register new account</Link>.</p></div>
        </div>
    </form>
    
</div>
}
}
export default Login;