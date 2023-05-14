import styles from './PostDetail.module.scss' 
import { useContext,useEffect } from "react";    
import { GlobalContext } from '../../context/GlobalContext';
import deletePost from '../../services/deletePost';
import Comment from "../../components/Comment"; 
import { Navigate,useNavigate } from 'react-router-dom';
import Button from '../Button';
import getPublicPosts from '../../services/getPublicPosts';
import { useLocation } from 'react-router-dom';
import Username from '../Username';
import getDateTimeFromTimeStamp from '../../services/getDateTimeFromTimeStamp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
function PostDetail (){ 
    
    {console.log('render post detail')}
    const location = useLocation();
    const navigate = useNavigate(Navigate)
    const {post,setPost} = useContext(GlobalContext) 
    const globalContext = useContext(GlobalContext) 
    const setIsLoading = globalContext.setIsLoading

    const postId =location.pathname.split('/')[2];  
    const convertedCreatedDateObj = getDateTimeFromTimeStamp(post.createdAt)
    const convertedUpdatedDateObj = getDateTimeFromTimeStamp(post.updatedAt)

    let data
    useEffect(  () => {  
        async function getPosts (){
            setIsLoading(true)
            const fetchData ={postId}
            data = await getPublicPosts(fetchData)     
            setPost({'_id':data.postsResult[0]._id,'title':data.postsResult[0].title,'postcontent':data.postsResult[0].postcontent,'createdAt':data.postsResult[0].createdAt,'updatedAt':data.postsResult[0].updatedAt,'username':data.postsResult[0].username,'userid':data.postsResult[0].userid,'postImage':data.postsResult[0].postimage}) 
            setTimeout(()=>{
                setIsLoading(false)
            },200)
             
        }
        getPosts()
    },[postId])
     
    const handleRemovePost = async (e)=>{ 
        e.stopPropagation()
        if(window.confirm(`Do you want to delete this post? ${post.title}`)){
    
            const deleteResult = await deletePost(post._id) 
            navigate('/')     
        }  
    } 

    const handleEditPost =(e)=>{ 
        e.preventDefault(); 
        e.stopPropagation() 
        setPost({'_id':post._id,'userid':post.userid,'title':post.title,'postcontent':post.postcontent,'createdAt':post.createdAt,'updatedAt':post.updatedAt,'username':post.username,'postImage':post.postImage}) 
        navigate('/editor')     
        
    }  
    return <div className={styles.post_container}> 
        
        <div className={styles.post_image_container}>
            <img src={post.postImage} />
        </div>
        <p className={styles.post_title}>{post.title}</p>

        <p className={styles.post_postcontent}>{post.postcontent}</p>   
        <div className={styles.statics_infor}>
            {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === post.userid) && <div className={styles.actions_container}>
            <Button small primary onClick={handleEditPost}>Edit post</Button>
            <Button small secondary onClick={handleRemovePost}>Delete post</Button>
            </div>}
            <div className={styles.author}>
                <FontAwesomeIcon className={styles.author_icon} icon={faUserAstronaut}/> 
                <Username username ={post.username} />
            </div> 
            <div className={styles.date_container}>
            <p className={styles.post_datecreated}>Created: {convertedCreatedDateObj.hour}:{convertedCreatedDateObj.minute}:{convertedCreatedDateObj.second} {convertedCreatedDateObj.day}/{convertedCreatedDateObj.month}/{convertedCreatedDateObj.year}</p>
            <p className={styles.post_datemodify}>Last edited: {convertedUpdatedDateObj.hour}:{convertedUpdatedDateObj.minute}:{convertedUpdatedDateObj.second} {convertedUpdatedDateObj.day}/{convertedUpdatedDateObj.month}/{convertedUpdatedDateObj.year}</p>  
            </div>
            </div>
        <div className={styles.comments_container}>
        <Comment/>
        </div>
        </div> 
     
    

} 
export default PostDetail;