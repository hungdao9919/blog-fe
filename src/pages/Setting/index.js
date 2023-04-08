import styles from './Setting.module.scss'
import {  useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';  
import Button from '../../components/Button'    
import updateUser from '../../services/updateUser';
function Setting(){
    const globalContext = useContext(GlobalContext)  
    const profileInfo = globalContext.profileInfo  
    
    const [isEditInfor, setIsEditInfor] = useState(false)
    const [isEditPass, setIsEditPass] = useState(false) 
    const [editedLastname, setEditedLastname] = useState('')
    const [editedFirstname, setEditedFirstname] = useState('')
    const [editedEmail, setEditedEmail ]= useState('') 
    const [editedPass, setEditedPass ]= useState('') 
    const [editedOldPass, setOldEditedPass ]= useState('') 
    const [editedConfirmpass, setEditedConfirmpass ]= useState('') 
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
            await updateUser({'password':editedPass,'oldPassword':editedOldPass})
        } 
        else{
            console.log('Passwords does not match')
        } 
    }
    const result = !profileInfo ? <h2>Vui lòng đăng nhập</h2> : <div className={styles.container} >
        {console.log('Profile render')} 
      <div className={styles.information_container}>
      <p>{profileInfo._id}</p>  
        <p>{profileInfo.username}</p>  
        <p>{profileInfo.lastname}</p>  
        <p>{profileInfo.firstname}</p>   
        <p>{profileInfo.email}</p>  
      </div>

       <div className={styles.actions_container}>
        <Button onClick={handleEditInfor} secondary rounded small>Edit profile Infomation</Button> 
        <Button onClick={handleChangepass} secondary rounded  small>Change password</Button> 
       </div>
       {isEditInfor && <form onSubmit={handleSubmitInfor} action="action_page.php">
            <div className={styles.editor_infor_container}>
                
                <label htmlFor="firstname"><b>Firstname</b></label>
                <input onChange={(e)=>setEditedFirstname(e.target.value)} value={editedFirstname} type="text" name="firstname" id="firstname" required/><br/>
                <label htmlFor="lastname"><b>Lastname</b></label>
                <input onChange={(e)=>setEditedLastname(e.target.value)} value={editedLastname} type="text" name="lastname" id="lastname" required/><br/>
                <label htmlFor="email"><b>Email</b></label>
                <input onChange={(e)=>setEditedEmail(e.target.value)} value={editedEmail} type="text" name="email" id="email" required/><br/>
            </div>
            <button  type="submit" className="registerbtn">Change information</button>
       </form>}

       {isEditPass && <form onSubmit={handleSubmitPass} action="action_page.php">
            <div className={styles.editor_infor_container}> 
                <label htmlFor="oldpassword"><b>Old Password</b></label>
                <input onChange={(e)=>setOldEditedPass(e.target.value)} value={editedOldPass} type="password" name="oldpassword" id="oldpassword" required/><br/>
                <label htmlFor="newpassword"><b>New Password</b></label>
                <input onChange={(e)=>setEditedPass(e.target.value)} value={editedPass} type="password" name="newpassword" id="newpassword" required/><br/>
                <label htmlFor="confirmnewpassword"><b>Confirm New Password</b></label>
                <input onChange={(e)=>setEditedConfirmpass(e.target.value)} value={editedConfirmpass} type="password" id="confirmnewpassword" name="confirmnewpassword" required/><br/>
            </div>
            <button  type="submit" className="registerbtn">Change password</button>
       </form>}

        
  
</div>
       
    return globalContext.isLogged ? result :<div>Login please</div>;
}
export default Setting;