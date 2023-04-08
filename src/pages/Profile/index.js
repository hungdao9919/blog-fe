import styles from './Profile.module.scss'
import {  useContext,useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';   
import uploadFile from '../../services/uploadFile'; 
import updateUser from '../../services/updateUser'
function Profile(){
    const globalContext = useContext(GlobalContext) 
    const profileInfo = globalContext.profileInfo   
    const [profileImage, setProfileImage] = useState()  
    const [showSubmit, setShowSubmit] = useState(false)  
    
    const handleChangeImageProfile = async (e)=>{ 
        e.preventDefault(); 

        const uploadResult = await uploadFile(profileImage)  
        const updateResult = await updateUser({'profileImage':uploadResult})
        console.log(uploadResult)
        console.log(updateResult)

    }  
    const handleSelectUpload = ()=>{
        setShowSubmit(true)
    }  
    const result = !profileInfo ? <h2>Vui lòng đăng nhập</h2> : <div className={styles.container} >
        {console.log('Profile render')}
        <h2>{profileInfo._id}</h2>
        <h2>{profileInfo.username}</h2>
        <h2>{profileInfo.lastname}</h2>
        <h2>{profileInfo.firstname}</h2>
        <h2>{JSON.stringify(profileInfo.roles)}</h2>
        <h2>{profileInfo.email}</h2>
        <h2>{profileInfo.joindate}</h2>
        <img width='200px' height='200px' src={`${profileInfo.profileImage}`}/>
        <form onSubmit={handleChangeImageProfile} action="action_page.php">
        <label htmlFor="profileImage"><b>Change profile image</b></label>

        <input onClick={handleSelectUpload} onChange={(e)=>{setProfileImage(e.target.files[0]) }} type="file" id="profileImage" name="profileImage" accept="image/*" required/>

        {showSubmit && <input type='submit' />}
        </form>
        <div className={styles.post_list}>
            {}
        </div>
  
</div>
       
    return result;
}
export default Profile;