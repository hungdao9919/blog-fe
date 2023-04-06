import styles from './Profile.module.scss'
import {  useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'; 
import {hostAPI} from '../../services/configs'   
function Profile(){
    const globalContext = useContext(GlobalContext) 
    const profileInfo = globalContext.profileInfo   
     
    const result = !profileInfo ? <h2>Vui lòng đăng nhập</h2> : <div className={styles.container} >
        {console.log('Profile render')}
        <h2>{profileInfo._id}</h2>
        <h2>{profileInfo.username}</h2>
        <h2>{profileInfo.lastname}</h2>
        <h2>{profileInfo.firstname}</h2>
        <h2>{JSON.stringify(profileInfo.roles)}</h2>
        <h2>{profileInfo.email}</h2>
        <h2>{profileInfo.joindate}</h2>
        <img src={`${hostAPI}${profileInfo.profileImage.slice(2)}`}/>
        <div className={styles.post_list}>
            {}
        </div>
  
</div>
       
    return result;
}
export default Profile;