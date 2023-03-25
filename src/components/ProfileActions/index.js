 
import styles from './ProfileActions.module.scss'
import Button from "../Button"; 
import { Link, useNavigate } from 'react-router-dom'; 

import {  useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { hostAPI } from '../../services/configs';
import logOut from '../../services/logOut';
function ProfileActions(){ 
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext) 
    const isLogged = globalContext.isLogged  
    const profileInfo = globalContext.profileInfo   
    const handleLogout = ()=>{
        logOut() 
        navigate(0)
    }
    return <div className={styles.container}>
         {
            isLogged ||
            <Button to={'/register'} rounded small secondary>Register</Button>
        }
        
        {
            isLogged &&
            <Button to={'/editor'} rounded small secondary>Create post</Button>
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
                <Link to={'/profile'} >
                <img src={`${hostAPI}${profileInfo.profileImage.slice(2)}`}/>
            </Link>
            </div>
        }

        {
            profileInfo && 
            <div className={styles.menu_container}>
            <ul>
                <li><Link to={'/profile'}>Profile page</Link></li>
                <li onClick={handleLogout}>Log out</li>
            </ul>
            </div>
        }
       </div>
         
        
   
 
    </div>
}
export default ProfileActions;