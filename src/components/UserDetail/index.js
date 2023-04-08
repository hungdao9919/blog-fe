import { useEffect, useState } from 'react';
import styles from './UserDetail.module.scss'        
import getUserDetail from '../../services/getUserdetail';
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
    
    return <div className={styles.user_detail}>
        {console.log('render-user detail')}
        <p>{userDetail.username}</p>
        <p>{userDetail.email}</p>
        <p>{userDetail.lastname}</p>
        <p>{userDetail.firstname}</p>
        <p>{userDetail.username}</p>
        <p> {userDetail.joindate}</p>
        <p> {userDetail.profileImage}</p>
        <p> {JSON.stringify(userDetail.roles)}</p>
        <p> {userDetail._id}</p>
       
       
        </div> 
     
    

} 
export default UserDetail;