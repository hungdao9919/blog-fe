import styles from './Post.module.scss'  
import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import deletePost from '../../services/deletePost'
function Post({id,userid,title,postcontent,datecreated,datemodify,username}){ 
    const [del, setDel] = useState(false)
    const {post,setPost} = useContext(PostContext) 
    
    const globalContext = useContext(GlobalContext) 
    const  handleSelectPost = () =>{ 
        setPost({'id':id,'title':title,'postcontent':postcontent,'datecreated':datecreated,'datemodify':datemodify,'username':username})
        
    }
    const handleRemovePost = async ()=>{ 
       const deleteResult = await deletePost(id)
       if(deleteResult.status ===204){
        setDel(true)
       }
         
    } 
    return ( del || <div onClick={()=>handleSelectPost() } className={styles.container}>
        {console.log('Render Post')}
        <p className={styles.title}>{title}</p>
        <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{datecreated}</p>
            <p className={styles.author}>{username}</p>
        </div>
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleRemovePost}>Xóa</Button>}
         
    </div>
    )
} 
export default Post;