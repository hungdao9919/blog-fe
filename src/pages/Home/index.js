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
            const fetchData ={
                'pageNo':1
            }
            data = await getPublicPosts(fetchData)    
            setPosts(data)      
            
            setIsLoading(false)
             
             
        }
        getPosts()
    },[]) 
    console.log(posts)
    return <div className={styles.container}>  
           <ListPosts/>  
    </div>
}
export default Home; 