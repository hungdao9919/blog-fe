 
import styles from './ListPosts.module.scss' 
import { useContext } from "react";   
import Post from "../../components/Post";
import { PostsContext } from "../../context/PostsContext";
  function ListPosts (){ 
    const {posts,setPosts} = useContext(PostsContext)  
    return <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.sidebar_container}>
            {console.log('Render ListPosts')}
            <p>Danh sách bài viết </p>
            {posts.length > 0 && posts.map((post,index)=><Post  key={index} _id={post._id} userid={post.userid}  title={post.title} datemodify={post.updatedAt} postcontent={post.postcontent} datecreated={post.createdAt} username={post.username} />)}
        </div> 
    </div>   
    </div>
     
    

}
export default ListPosts;