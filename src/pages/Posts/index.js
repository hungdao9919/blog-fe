import { useState,useEffect } from "react";
import styles from './Posts.module.scss' 
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import Comment from "../../components/Comment";
 import getPublicPosts from "../../services/getPublicPosts";
 import Post from "../../components/Post";
  function Posts (){
    const [posts,setPosts] = useState([]);
    const postContext = useContext(PostsContext)
    useEffect(  () => {
        async function getPosts (){
            const postsResult = await getPublicPosts() 
            postContext.setId(postsResult[0].id)
            postContext.setTitle(postsResult[0].title)
            postContext.setPostContent(postsResult[0].postcontent)
            postContext.setDateCreated(postsResult[0].datecreated)
            postContext.setDateModify(postsResult[0].datemodify)
            postContext.setUsername(postsResult[0].username) 
            setPosts(postsResult) 
        }
        getPosts()
    },[])

    return <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.sidebar_container}>
            {console.log('Render Posts')}
            <p>Danh sách bài viết </p>
            {posts.length>0 && posts.map((post,index)=><Post key={index} id={post.id} title={post.title} dateModify={post.datemodify} postcontent={post.postcontent} datecreated={post.datecreated} username={post.username} />)}
        </div>
        <div className={styles.content_container}> 
        {posts.length>0 && 
        <div>
        <p className={styles.post_id}>{`id ${postContext.id}`}</p>
        <p className={styles.post_title}>{`title ${postContext.title}`}</p>
        <p className={styles.post_postcontent}>{`postContent ${postContext.postContent}`}</p>
        <p className={styles.post_datecreated}>{`dateCreated ${postContext.dateCreated}`}</p>
        <p className={styles.post_datemodify}>{`dateModify ${postContext.dateModify}`}</p> 
        <p className={styles.post_username}>{`username ${postContext.username}`}</p>
        </div>}
        {posts.length>0 &&  <Comment/>}
        </div>
    </div>  
    </div>
     
    

}
export default Posts;