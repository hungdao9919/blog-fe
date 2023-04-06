import styles from './Home.module.scss'
import ListPosts from "../../components/ListPosts"; 
import PostDetail from '../../components/PostDetail' 
import { useEffect,useState,useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import { PostsContext } from '../../context/PostsContext';
import getPublicPosts from '../../services/getPublicPosts';
function Home(){ 
    const {post,setPost}= useContext(PostContext)
    const {posts,setPosts} = useContext(PostsContext)
    let data
    useEffect(  () => {
        async function getPosts (){
            data = await getPublicPosts(1)   
            const postsResult = data.postsResult 
            setPosts(data)      
             
        }
        getPosts()
    },[]) 
    return <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.sidebar_container}> 
           <ListPosts/>
        </div>
         
    </div>  
    </div>
}
export default Home; 