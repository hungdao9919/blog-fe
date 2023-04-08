import styles from './Register.module.scss'
import {useState} from 'react'   
import { Link ,useNavigate} from 'react-router-dom'
import register from '../../services/register'
import { GlobalContext } from '../../context/GlobalContext';
import uploadFile from '../../services/uploadFile';
import { useContext } from 'react'  
function Register(){ 
    const globalContext = useContext(GlobalContext) 
    const isLogged = globalContext.isLogged
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    const [firstname, setFirstname] = useState('') 
    const [lastname, setLastname] = useState('') 
    const [email, setEmail] = useState('')  
    const [profileImage, setProfileImage] = useState()  
    
    console.log(profileImage)
    if(isLogged){
        navigate('/')
    }

    const handleSubmit =async (e)=>{
            e.preventDefault(); 
            const imageResult = await uploadFile(profileImage)
            const registerResult =await register(username,password,email,lastname,firstname,imageResult)
            if(registerResult.status ===201){
                navigate('/')
                navigate(0)     
            }
            else{
                console.log(registerResult)
            }     
           
        
    }   
   
    return <div className={styles.login_wrapper}>
         {console.log('Render Register form')}
        <form onSubmit={handleSubmit} action="action_page.php">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                 
                <label htmlFor="uname"><b>Username</b></label>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="firstname"><b>First name</b></label>
                <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} type="text" placeholder="Enter First name" name="firstname" required/>

                <label htmlFor="lastname"><b>Last name</b></label>
                <input onChange={(e)=>setLastname(e.target.value)} value={lastname} type="text" placeholder="Enter lastname" name="lastname" required/>

                <label htmlFor="email"><b>Email</b></label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="text" placeholder="Enter Email" name="email" id="email" required/>

                <label htmlFor="profileImage"><b>Profile Image</b></label>
                <input onChange={(e)=>{ setProfileImage(e.target.files[0])}} type="file" id="profileImage" name="profileImage" accept="image/*" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                {/* <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/> */}
               

                 
                <button  type="submit" className="registerbtn">Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <Link  to='/login'>Login</Link>.</p>
            </div>
        </form>
    </div>
}
export default Register;