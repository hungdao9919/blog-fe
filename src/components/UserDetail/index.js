import { useEffect, useState } from 'react';
import styles from './UserDetail.module.scss'        
import getUserDetail from '../../services/getUserdetail';
import getDateTimeFromTimeStamp from '../../services/getDateTimeFromTimeStamp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
function UserDetail ({username}){ 
    const [userDetail, setUserDetail] = useState({})
    useEffect(()=>{
        async function getUser (callback){
            const data = await getUserDetail(username)  
            
            callback(data)  
            
        }
        getUser(setUserCallback)
    },[])
    const setUserCallback = (data)=>{
        setUserDetail(data)
    } 
    
    const newDateTime = getDateTimeFromTimeStamp(userDetail.createdAt)  
    return <div className={styles.user_detail}>
            {console.log('render-user detail')} 
            
            <div className={styles.profile_image}>
                <img className={styles.profile_image_img} src={userDetail.profileImage}/> 
                <div className={styles.background_profile_image}> 
                    <img src='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80'/>      
                </div>
            </div> 

            <p  className={styles.fullname}>{userDetail.firstname} {userDetail.lastname}</p>   
             
            <div className={styles.username_container}>  
                <FontAwesomeIcon className={styles.user_icon} icon={faUser}/>  
                <p  className={styles.username}> {userDetail.username}</p>
            </div> 

            <div className={styles.username_email_container}>
                <FontAwesomeIcon className={styles.email_icon} icon={faEnvelope}/>   
                <p  className={styles.email}>{userDetail.email}</p>  
            </div> 

            { userDetail.createdAt&&  <div className={styles.profile_statics}>
                <FontAwesomeIcon className={styles.static_icon} icon={faCalendar}/>   

                <p>{newDateTime.hour}:{newDateTime.minute}:{newDateTime.second} {newDateTime.day}/{newDateTime.month}/{newDateTime.year}</p>  
            </div> }
       
        </div> 
     
    

} 
export default UserDetail;