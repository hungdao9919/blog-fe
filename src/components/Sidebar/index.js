 import { useState,useEffect } from "react";
import styles from './Sidebar.module.scss' 

 import getPublicPosts from "../../services/getPublicPosts";
 import Post from "../Post";
  function Sidebar (){
    const [posts, setPosts] = useState([]);
  
    // useEffect(  () => {
    //     async function getPosts (){
    //         const postsResult = await getPublicPosts()
    //         setPosts(postsResult) 
    //     }
    //     getPosts()
    // },[])
    // return  <div className={styles.container}>
    //             {console.log('Render Sidebar')}
    //             <p>Danh sách bài viết </p>
    //             {posts.length>0 && posts.map((post,index)=><Post key={index} id={post.id} title={post.title} dateModify={post.datemodify} postcontent={post.postcontent} datecreated={post.datecreated} username={post.username} />)}
    //         </div> 

}
export default Sidebar;