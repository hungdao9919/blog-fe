 import { useState,useEffect } from "react";
import styles from './Sidebar.module.scss'

 import getPublicPosts from "../../services/getPublicPosts";
 import Post from "../Post";
  function Sidebar (){
    const [posts, setPosts] = useState([]);
  
    useEffect(  () => {
        async function getPosts (){
            const postsResult = await getPublicPosts()
            setPosts(postsResult) 
        }
        getPosts()
    },[])
    return <div className={styles.container}>
        {console.log('Render Sidebar')}
        <p>Danh sách bài viết </p>
        {posts.length>0 && posts.map((post,index)=><Post key={index} title={post.title} postcontent={post.postcontent} datecreated={post.datecreated} />)}
    </div>

}
export default Sidebar;