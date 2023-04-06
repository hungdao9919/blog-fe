import styles from './Posts.module.scss'  
import ListPosts from "../../components/ListPosts"; 
import PostDetail from '../../components/PostDetail' 
import { useContext,useEffect,useState } from 'react';
import { PostContext } from '../../context/PostContext';
import { PostsContext } from '../../context/PostsContext';
import { GlobalContext } from '../../context/GlobalContext';
import getPublicPosts from '../../services/getPublicPosts';
  function MyPosts (){  
    const {post,setPost}= useContext(PostContext)
    const {posts,setPosts} = useContext(PostsContext)
    const globalContext = useContext(GlobalContext) 
    let data
    useEffect(  () => {
        if(globalContext?.profileInfo?._id){
            async function getPosts (){
                data = await getPublicPosts(1,globalContext.profileInfo._id)  
                const postsResult = data.postsResult
                setPosts(data)        
                 
            }
            getPosts()
        }
    },[globalContext.profileInfo])
       
    return <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.sidebar_container}> 
           <ListPosts/>
        </div>
        {/* <div className={styles.content_container}> 
            <PostDetail/>
        </div> */}
    </div>  
    </div>
     
    

}
export default MyPosts;