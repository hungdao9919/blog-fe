import styles from './PostDetail.module.scss' 
import { useContext,useEffect } from "react";   
import { PostsContext } from "../../context/PostsContext";
import { PostContext } from '../../context/PostContext';

import Comment from "../../components/Comment"; 
function PostDetail (){ 
    {console.log('render post detail')}
    const {post,setPost} = useContext(PostContext)
    const {posts,setPosts} = useContext(PostsContext)  
    
    return <div>
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