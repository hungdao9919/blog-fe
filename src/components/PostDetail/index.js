import styles from './PostDetail.module.scss' 
import { useContext,useEffect } from "react";    
import { GlobalContext } from '../../context/GlobalContext';
import deletePost from '../../services/deletePost';
import Comment from "../../components/Comment"; 
import { Navigate,useNavigate } from 'react-router-dom';
import Button from '../Button';
import getPublicPosts from '../../services/getPublicPosts';
import { useLocation } from 'react-router-dom';

function PostDetail (){ 
    
    {console.log('render post detail')}
    const location = useLocation();
    const navigate = useNavigate(Navigate)
    const {post,setPost} = useContext(GlobalContext) 
    const globalContext = useContext(GlobalContext) 
    const postId =location.pathname.split('/')[2];  
    let data
    useEffect(  () => { 
         
        async function getPosts (){
            data = await getPublicPosts('','',postId)  
            setPost({'_id':data.postsResult[0]._id,'title':data.postsResult[0].title,'postcontent':data.postsResult[0].postcontent,'createdAt':data.postsResult[0].createdAt,'updatedAt':data.postsResult[0].updatedAt,'username':data.postsResult[0].username}) 
            
             
        }
        getPosts()
    },[globalContext.profileInfo])
     
    const handleRemovePost = async (e)=>{ 
        e.stopPropagation()
        if(window.confirm(`Bạn có muốn xóa post ${post.title}`)){
    
            const deleteResult = await deletePost(post._id)  
             
        } 
         
    } 

    const handleEditPost =(e)=>{ 
        e.preventDefault(); 
        e.stopPropagation()
        setPost({'_id':post._id,'userid':post.userid,'title':post.title,'postcontent':post.postcontent,'createdAt':post.createdAt,'updatedAt':post.updatedAt,'username':post.username}) 
        navigate('/editor')     
        
    } 
    return <div>
      
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === post.userid) && <Button small primary onClick={handleRemovePost}>Xóa</Button>}
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === post.userid) && <Button small primary onClick={handleEditPost}>Sửa</Button>}
        <p className={styles.post_id}>{`id ${post._id}`}</p>
        <p className={styles.post_title}>{`title ${post.title}`}</p>
        <p className={styles.post_postcontent}>{`postContent ${post.postcontent}`}</p>
        <p className={styles.post_datecreated}>{`createdAt ${post.createdAt}`}</p>
        <p className={styles.post_datemodify}>{`updatedAt ${post.updatedAt}`}</p> 
        <p className={styles.post_username}>{`username ${post.username}`}</p>
        <Comment/>
        </div> 
     
    

} 
export default PostDetail;