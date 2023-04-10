import { useState } from 'react'
import styles from './Username.module.scss'  
import UserDetail from '../UserDetail'      
function Username ({username}){ 
    const [show,setShow] = useState(false)
     
    const handleOnClickUsername=(e)=>{
        e.stopPropagation()
        setShow(!show)
        
    }
    const handleOnMouseOut =()=>{
        setShow(false)
    }
    
    return <div  onMouseOver={handleOnClickUsername} onMouseOut={handleOnMouseOut}>
      <div className={styles.username}>
        <p>{username}</p>
        {show && <UserDetail  username={username}/>}
      </div>
        </div> 
     
    

} 
export default Username;