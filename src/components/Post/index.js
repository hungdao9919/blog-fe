import styles from './Post.module.scss'  
import { useContext, useState } from 'react'; 
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import deletePost from '../../services/deletePost' 
import { Navigate, useNavigate } from 'react-router-dom';  
function Post({_id,userid,title,postcontent,createdAt,updatedAt,username}){ 
    const {post,setPost} = useContext(GlobalContext)
    const [del, setDel] = useState(false)
    const navigate = useNavigate(Navigate)
    const globalContext = useContext(GlobalContext)   
     
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
    return ( del || <div onClick={handleSelectPost } className={styles.container}>
        {console.log('Render Post')}
        <p className={styles.title}>{title}</p>
        <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{createdAt}</p>
            <p className={styles.date_updated}>{updatedAt}</p>
            <p className={styles.author}>{username}</p>
        </div>
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleRemovePost}>Xóa</Button>}
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleEditPost}>Sửa</Button>}
        
         
    </div>
    )
} 
export default Post;