 
import styles from './ProfileActions.module.scss'
import Button from "../Button"; 
import { Link, useNavigate } from 'react-router-dom'; 

import {  useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'; 
import logOut from '../../services/logOut'; 
function ProfileActions(){ 
    const navigate = useNavigate();
     
    const globalContext = useContext(GlobalContext) 
    const isLogged = globalContext.isLogged  
    const profileInfo = globalContext.profileInfo   
    const setPost = globalContext.setPost    
    const handleLogout = async ()=>{
        await logOut() 
        navigate('/')  
        navigate(0) 
        
    }
    const handleCreatePost = async ()=>{ 
        setPost({})
         
        navigate('/editor') 
        
    }
    const handleSetting = async ()=>{ 
         
         
        navigate('/setting') 
        
    }
    return <div className={styles.container}>
        {console.log('Render ProfileActions')} 
         {
            isLogged ||
            <Button to={'/register'} rounded small secondary>Register</Button>
        }
        
        {
            isLogged &&
            <Button onClick={handleCreatePost} rounded small secondary>Create post</Button>
        }

        {
            isLogged ||
            <Button to={'/login'} rounded small secondary>Log in</Button>
        }
       <div className={styles.profile_image}>
        {
            profileInfo &&
            <div className={styles.profile_container}>
                <p className={styles.profile_name}>{`${profileInfo.lastname} ${profileInfo.firstname}`}</p>
                <Link to={`/profile-details/${globalContext.profileInfo.username}`} >
                <img src={`${profileInfo.profileImage}`}/>
            </Link>
            </div>
        }

        {
            profileInfo && 
            <div className={styles.menu_container}>
            <ul>
                <li><Link to={`/profile-details/${globalContext.profileInfo.username}`}>Profile page</Link></li>
                <li onClick={handleSetting}>Setting</li>
                <li onClick={handleLogout}>Log out</li>
            </ul>
            </div>
        }
       </div>
         
        
   
 
    </div>
}
export default ProfileActions;