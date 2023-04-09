import { useState } from 'react'
import styles from './Username.module.scss'  
import UserDetail from '../UserDetail'      
function Username ({username,...props}){ 
    const [show,setShow] = useState(false)
     
    const handleOnClickUsername=(e)=>{
        e.stopPropagation()
        setShow(!show)
        
    }
     const handleOnMouseOut =()=>{
        setShow(false)
     }
    
    return <div {...props} onClick={handleOnClickUsername} onMouseOut={handleOnMouseOut}>
        <p  className={styles.username}>{username}</p>
        {show && <UserDetail  username={username}/>}
        </div> 
     
    

} 
export default Username;