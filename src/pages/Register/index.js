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
            <div className={styles.login_container}>  
                 
                <label htmlFor="uname"><b>Username</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" id="uname"  name="uname" required/>
                </div>


                <label htmlFor="firstname"><b>First name</b></label>
                <div className={styles.input_container}> 
                    <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} type="text" placeholder="Enter First name"  id="firstname" name="firstname" required/>
                </div>

                <label htmlFor="lastname"><b>Last name</b></label>
                <div className={styles.input_container}>

                    <input onChange={(e)=>setLastname(e.target.value)} value={lastname} type="text" placeholder="Enter lastname" id="lastname" name="lastname" required/>
                </div>

                <label htmlFor="email"><b>Email</b></label>
                <div className={styles.input_container}> 
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="text" placeholder="Enter Email" name="email" id="email" required/>
                </div>

                 

                 
                <label htmlFor="psw"><b>Password</b></label>
                <div className={styles.input_container}>

                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                </div>

                {/* <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/> */}
                <div className={styles.upload_container}>
                    <label className={styles.profile_image} htmlFor="profileImage"><b>Upload profile picture</b></label> 
                </div>
                <input onChange={(e)=>{ setProfileImage(e.target.files[0])}} type="file" style={{visibility:'hidden'}} id="profileImage" name="profileImage" accept="image/*" required/>
                {profileImage && <img width='300px' height='300px' src={URL.createObjectURL(profileImage)}/>}
                
                <button  type="submit" className="registerbtn">Register</button>
            </div>

            <div className={styles.register_container}>
                <p>Already have an account? <Link  className={styles.register_link}  to='/login'>Login</Link>.</p>
            </div>
        </form>
    </div>
}
export default Register;