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

    let data
    useEffect(  () => {
        if(globalContext.profileInfo){
            async function getPosts (){
                console.log('get post boi id user')
                setIsLoading(true)
                const fetchData={
                    'pageNo':1,
                    'userId': globalContext.profileInfo._id
                }
                data = await getPublicPosts(fetchData)   
                 
                setPosts(data)  
                setIsLoading(false)      
                 
            }
            getPosts()
        }
    },[globalContext.profileInfo])
       
    return <div className={styles.wrapper}> 
           <ListPosts/> 
    </div>
     
    

}
export default MyPosts;