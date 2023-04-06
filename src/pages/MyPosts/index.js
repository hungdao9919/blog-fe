import styles from './Posts.module.scss'  
import ListPosts from "../../components/ListPosts";  
import { useContext,useEffect } from 'react'; 
import { PostsContext } from '../../context/PostsContext';
import { GlobalContext } from '../../context/GlobalContext';
import getPublicPosts from '../../services/getPublicPosts';
  function MyPosts (){   
    const {posts,setPosts} = useContext(PostsContext)
    const globalContext = useContext(GlobalContext)  
    let data
    useEffect(  () => {
        if(globalContext.profileInfo){
            async function getPosts (){
                console.log('get post boi id user')
                data = await getPublicPosts(1,globalContext.profileInfo._id)  
                console.log(data)
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
        
    </div>  
    </div>
     
    

}
export default MyPosts;