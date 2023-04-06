import styles from './Home.module.scss'
import ListPosts from "../../components/ListPosts"; 
import { useEffect,useContext } from 'react'; 
import { PostsContext } from '../../context/PostsContext';
import getPublicPosts from '../../services/getPublicPosts'; 
function Home(){ 
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