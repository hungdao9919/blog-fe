import { useState } from 'react'
import styles from './Username.module.scss'  
import UserDetail from '../UserDetail'   
import { useNavigate } from 'react-router-dom';  

function Username ({username}){ 
    const navigate = useNavigate() 
    const [show,setShow] = useState(false) 
    const handleOnClickUsername=(e)=>{
        e.stopPropagation()
        setShow(!show)
        
    }
    const handleOnMouseOut =()=>{
        setShow(false)
    }
    const handleOnClick = ()=>{
      navigate(`/profile-details/${username}`)
    }
    return <div  onMouseOver={handleOnClickUsername} onMouseOut={handleOnMouseOut}>
      <div onClick={handleOnClick} className={styles.username}>
        <p>{username}</p>
        {show && <UserDetail  username={username}/>}
      </div>
        </div> 
     
    

} 
export default Username;