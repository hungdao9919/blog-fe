import styles from './Home.module.scss'
import ListPosts from "../../components/ListPosts"; 
import { useEffect,useContext } from 'react'; 
import { PostsContext } from '../../context/PostsContext';
import getPublicPosts from '../../services/getPublicPosts'; 
import { GlobalContext } from '../../context/GlobalContext';
function Home(){ 
    const {isLoading, setIsLoading} = useContext(GlobalContext)
    const {posts,setPosts} = useContext(PostsContext)
    let data 
    useEffect(  () => {
        async function getPosts (){
            setIsLoading(true)

            data = await getPublicPosts(1)   
            const postsResult = data.postsResult 
            setPosts(data)      
            
            setIsLoading(false)
             
             
        }
        getPosts()
    },[]) 
    return <div className={styles.container}>  
           <ListPosts/>  
    </div>
}
export default Home; 