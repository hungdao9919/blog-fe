import styles from './MiniPost.module.scss'  
import { useContext, useState } from 'react'; 
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import deletePost from '../../services/deletePost' 
import { Navigate, useNavigate } from 'react-router-dom';   
import getDateTimeFromTimeStamp from '../../services/getDateTimeFromTimeStamp';
function MiniPost({_id,userid,title,postcontent,createdAt,updatedAt,username}){ 
    const {post,setPost} = useContext(GlobalContext)
    const [del, setDel] = useState(false)
    const navigate = useNavigate()
    const globalContext = useContext(GlobalContext) 
    const convertedDateObj = getDateTimeFromTimeStamp(createdAt)

    const handleRemovePost = async (e)=>{ 
        e.stopPropagation()
        if(window.confirm(`Bạn có muốn xóa post ${title}`)){
    
            const deleteResult = await deletePost(_id) 
            if(deleteResult.status ===204){
             setDel(true) 
            } 
        } 
    }    
    const handleEditPost =(e)=>{ 
        e.preventDefault(); 
        e.stopPropagation()
        setPost({'_id':_id,'userid':userid,'title':title,'postcontent':postcontent,'createdAt':createdAt,'updatedAt':updatedAt,'username':username}) 
        navigate('/editor')     
        
    } 
    const  handleSelectPost = () =>{  
        setPost({'_id':_id,'title':title,'postcontent':postcontent,'createdAt':createdAt,'updatedAt':updatedAt,'username':username}) 
        navigate(`/post-details/${_id}`)    
    } 
 
    return ( del || <div className={styles.container}>
        {console.log('Render Mini Post')} 
        
        <div className={styles.post_actions_container}>
             
            {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <div className={styles.remove_edit_container}>
                    <Button small primary onClick={handleEditPost}>Edit Post</Button>
                    <Button small secondary onClick={handleRemovePost}>Delete Post</Button> 
            </div>}
        </div>
        
            <p className={styles.title}>{title}</p>
            <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{convertedDateObj.hour}:{convertedDateObj.minute}:{convertedDateObj.second} {convertedDateObj.day}/{convertedDateObj.month}/{convertedDateObj.year}</p> 
            <div className={styles.viewpost_btn}>
            <Button primary small underline onClick={handleSelectPost}> View post </Button>
            </div>
        </div>
        
         
    </div>
    )
} 
export default MiniPost; 