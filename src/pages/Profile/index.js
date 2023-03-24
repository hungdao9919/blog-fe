import styles from './Profile.module.scss'
import getProfileInfo from '../../services/getProfileInfo';
import { useEffect, useState } from 'react';
import {hostAPI} from '../../services/configs'

function Profile(){
    const [profileInfo, setProfileInfo] = useState() 
    useEffect(()=>{
        async function handleGetProfileInfo (){
            const result  =  await getProfileInfo() 
            setProfileInfo(result) 
         }

         handleGetProfileInfo() 
    },[]) 
    console.log(profileInfo)
    console.log('render')
     
    const result = !profileInfo ? <h2>Loading</h2> : <div className={styles.container} >
        <h2>{profileInfo._id}</h2>
        <h2>{profileInfo.username}</h2>
        <h2>{profileInfo.lastname}</h2>
        <h2>{profileInfo.firstname}</h2>
        <h2>{JSON.stringify(profileInfo.roles)}</h2>
        <h2>{profileInfo.email}</h2>
        <h2>{profileInfo.joindate}</h2>
        <img src={`${hostAPI}${profileInfo.profileImage.slice(2)}`}/>
  
</div>
     
    return result;
}
export default Profile;