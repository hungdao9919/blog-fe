import styles from './Profile.module.scss'
import {  useContext,useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';    
import ProfileDetails from '../../components/ProfileDetails';
function Profile(){
    const globalContext = useContext(GlobalContext) 
    const profileInfo = globalContext.profileInfo    
    const result = !profileInfo ? <h2>Vui lòng đăng nhập</h2> : <div> <ProfileDetails />  
</div>
       
    return result;
}
export default Profile;