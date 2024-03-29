import styles from './Posts.module.scss'  
import ListPosts from "../../components/ListPosts";  
import { useContext,useEffect } from 'react'; 
import { PostsContext } from '../../context/PostsContext';
import { GlobalContext } from '../../context/GlobalContext';
import getPublicPosts from '../../services/getPublicPosts';
  function MyPosts (){   
    const {posts,setPosts} = useContext(PostsContext)
    const globalContext = useContext(GlobalContext)      
    const setIsLoading = globalContext.setIsLoading
    document.title="My post"
    let data
    let pageNo 
    if(posts?.pageNo){
        pageNo = posts.pageNo
    }
    else{
        pageNo=1
    } 
    useEffect(  () => {
        if(globalContext.profileInfo){
            async function getPosts (){
                console.log('get post boi id user') 
                const fetchData={
                    'pageNo':pageNo,
                    'userId': globalContext.profileInfo._id
                }
                data = await getPublicPosts(fetchData)   
                 
                setPosts(data)      
                 
            }
            getPosts()
        }
    },[posts.pageNo]) 
    return <div className={styles.wrapper}> 

           {posts?<ListPosts/> :<div className={styles.no_post}>You have not written any posts yet</div>}
    </div>
     
    

}
export default MyPosts;