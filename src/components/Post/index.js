import styles from './Post.module.scss'  
import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import deletePost from '../../services/deletePost' 
import { Navigate, useNavigate } from 'react-router-dom';
import { PostEditorContext } from '../../context/PostEditorContext';
function Post({_id,userid,title,postcontent,datecreated,datemodify,username}){ 
    const [del, setDel] = useState(false)
    const navigate = useNavigate(Navigate)
    const globalContext = useContext(GlobalContext) 
    const {post,setPost} = useContext(PostContext) 
    const {isEdit,setIsEdit} = useContext(PostEditorContext)  

    const  handleSelectPost = () =>{ 
        setPost({'_id':_id,'title':title,'postcontent':postcontent,'datecreated':datecreated,'datemodify':datemodify,'username':username})
    } 
    const handleRemovePost = async ()=>{ 
       const deleteResult = await deletePost(_id)
       if(deleteResult.status ===204){
        setDel(true) 
       } 
         
    } 
    const handleEditPost =(e)=>{ 
        e.preventDefault(); 
        console.log(_id,isEdit)
        navigate('/editor')
          
        
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
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleEditPost}>Sửa</Button>}
         
    </div>
    )
} 
export default Post;