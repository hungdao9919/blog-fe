import styles from './Setting.module.scss'
import {  useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';  
import Button from '../../components/Button'    
import updateUser from '../../services/updateUser';
import uploadFile from '../../services/uploadFile';
import {useNavigate} from 'react-router-dom'

function Setting(){
    document.title="Setting"
    const globalContext = useContext(GlobalContext)  
    const profileInfo = globalContext.profileInfo   
    const navigate = useNavigate();
    const setIsLoading = globalContext.setIsLoading

    const [isEditInfor, setIsEditInfor] = useState(false)
    const [isEditPass, setIsEditPass] = useState(false) 
    const [editedLastname, setEditedLastname] = useState('')
    const [editedFirstname, setEditedFirstname] = useState('')
    const [editedEmail, setEditedEmail ]= useState('') 
    const [editedPass, setEditedPass ]= useState('') 
    const [editedOldPass, setOldEditedPass ]= useState('') 
    const [error, setError ]= useState('') 

    const [editedConfirmpass, setEditedConfirmpass ]= useState('')  
    const [profileImage, setProfileImage] = useState()  
    const [showSubmit, setShowSubmit] = useState(false)  

    const handleEditInfor = ()=>{
        setIsEditInfor(true)
        setIsEditPass(false) 
        setEditedLastname(profileInfo.lastname)
        setEditedFirstname(profileInfo.firstname)
        setEditedEmail(profileInfo.email)

    }

    const handleChangepass = async ()=>{
        setIsEditPass(true)
        setIsEditInfor(false)
         
    }

    const handleSubmitInfor =  async(e)=>{
        e.preventDefault(); 
        await updateUser({'email':editedEmail,'lastname':editedLastname,'firstname':editedFirstname})
        window.location.reload()
    }

    const handleSubmitPass = async (e)=>{
        e.preventDefault(); 
        if(editedPass === editedConfirmpass){
            setIsLoading(true)
           const editPassResult =  await updateUser({'password':editedPass,'oldPassword':editedOldPass})
           if(editPassResult.message){
                setIsLoading(false)
               setError(editPassResult.message)
           }
           else{
                navigate(0)
                alert("Password changed successfully")
           }
        } 
        else{
            setError('Passwords does not match')
        } 
    }
    
    const handleChangeImageProfile = async (e)=>{ 
        setIsLoading(true)
        e.preventDefault();  
        const uploadResult = await uploadFile(profileImage)  
        const updateResult = await updateUser({'profileImage':uploadResult})
        navigate(0)

    }  
    const handleSelectUpload = ()=>{
        setShowSubmit(true)
    }  
    const result = !profileInfo ? <h2>Vui lòng đăng nhập</h2> : <div className={styles.container} >
            {console.log('Setting render')} 
            <span>Setting</span>
            <div className={styles.information_container}>
                <div className={styles.profile_image_container}>
                    <img  src={`${profileImage?URL.createObjectURL(profileImage) : profileInfo.profileImage}`}/>  
                    <form onSubmit={handleChangeImageProfile}>
                        <label htmlFor="profileImage"><b>Change profile image</b></label> 
                        <input style={{visibility:'hidden'}} onClick={handleSelectUpload} onChange={(e)=>{setProfileImage(e.target.files[0]) }} type="file" id="profileImage" name="profileImage" accept="image/*" required/>
                        {showSubmit && <button  type="submit" className="registerbtn">Save image</button>}
                    </form>
                </div>
                <p><span>User ID:</span> {profileInfo._id}</p>  
                <p><span>Username:</span> {profileInfo.username}</p>  
                <p><span>Firstname:</span> {profileInfo.firstname}</p>   
                <p><span>Lastname:</span> {profileInfo.lastname}</p>  
                <p><span>Email:</span> {profileInfo.email}</p>  
        <div className={styles.actions_container}>
            <Button onClick={handleEditInfor}  primary rounded small>Edit profile Infomation</Button> 
            <Button onClick={handleChangepass} secondary rounded  small>Change password</Button> 
        </div>
        </div>

       {isEditInfor && <form onSubmit={handleSubmitInfor}>
            <div className={styles.editor_infor_container}>
                
                <div className={styles.input_wrapper}>
                    <label htmlFor="firstname"><b>Firstname</b></label>
                    <div className={styles.input_container}>
                        <input onChange={(e)=>setEditedFirstname(e.target.value)} value={editedFirstname} type="text" name="firstname" id="firstname" required/>
                    </div>
                </div>
                <div className={styles.input_wrapper}>
                    <label htmlFor="lastname"><b>Lastname</b></label>
                    <div className={styles.input_container}>
                        <input onChange={(e)=>setEditedLastname(e.target.value)} value={editedLastname} type="text" name="lastname" id="lastname" required/>
                    </div>
                </div>
                <div className={styles.input_wrapper}>
                    <label htmlFor="email"><b>Email</b></label>
                    <div className={styles.input_container}> 
                        <input onChange={(e)=>setEditedEmail(e.target.value)} value={editedEmail} type="email" name="email" id="email" required/>
                    </div>
                </div>
                <div className={styles.button_container}>
                    <button  type="submit" className="registerbtn">Change information</button></div>
                </div>
       </form>}

       {isEditPass && <form onSubmit={handleSubmitPass}>
            <div className={styles.editor_infor_container}> 
                <div className={styles.input_wrapper}>
                <label htmlFor="oldpassword"><b>Old Password</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setOldEditedPass(e.target.value)} value={editedOldPass} type="password" name="oldpassword" id="oldpassword" required/>
                </div>
                </div>
                <div className={styles.input_wrapper}> 
                <label htmlFor="newpassword"><b>New Password</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setEditedPass(e.target.value)} value={editedPass} type="password" name="newpassword" id="newpassword" required/>
                </div>
                </div>
                <div className={styles.input_wrapper}> 
                <label htmlFor="confirmnewpassword"><b>Confirm New Password</b></label>
                <div className={styles.input_container}>
                    <input onChange={(e)=>setEditedConfirmpass(e.target.value)} value={editedConfirmpass} type="password" id="confirmnewpassword" name="confirmnewpassword" required/>
                </div>
                </div>
                <div  className={styles.button_container}>
                    {error&& <div className={styles.error_container} >{error}</div>}
                    <button  type="submit" className="registerbtn">Change password</button>
                </div>
            </div>
       </form>} 
  
</div>
       
    return globalContext.isLogged ? result :<div>Login please</div>;
}
export default Setting;