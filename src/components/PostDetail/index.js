import styles from './PostDetail.module.scss' 
import { useContext,useEffect } from "react";   
import { PostsContext } from "../../context/PostsContext";
import { PostContext } from '../../context/PostContext';

import Comment from "../../components/Comment"; 
function PostDetail (){ 
    const {post,setPost} = useContext(PostContext)
    const {posts,setPosts} = useContext(PostsContext)
      
    
   
    return (posts.length>0 && 
        <div>
        <p className={styles.post_id}>{`id ${post.id}`}</p>
        <p className={styles.post_title}>{`title ${post.title}`}</p>
        <p className={styles.post_postcontent}>{`postContent ${post.postcontent}`}</p>
        <p className={styles.post_datecreated}>{`dateCreated ${post.datecreated}`}</p>
        <p className={styles.post_datemodify}>{`dateModify ${post.datemodify}`}</p> 
        <p className={styles.post_username}>{`username ${post.username}`}</p>
        {posts.length> 0 &&  <Comment/>}
        </div>)
     
    

}
export default PostDetail;