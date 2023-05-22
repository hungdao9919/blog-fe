import styles from './Home.module.scss'
import ListPosts from "../../components/ListPosts"; 
import { useEffect,useContext } from 'react'; 
import { PostsContext } from '../../context/PostsContext';
import getPublicPosts from '../../services/getPublicPosts'; 
import { GlobalContext } from '../../context/GlobalContext';
function Home(){ 
    const {isLoading, setIsLoading} = useContext(GlobalContext)
    const {posts,setPosts} = useContext(PostsContext)
     
    let pageNo 
    if(posts?.pageNo){
        pageNo = posts.pageNo
    }
    else{
        pageNo=1
    }
    let data 
    document.title="Lamsitemmo Blog"
    useEffect(  () => {
        async function getPosts (){ 
            const fetchData ={
                'pageNo':pageNo
            }
            data = await getPublicPosts(fetchData)    
            setPosts(data)        
        }
        getPosts()
    },[posts.pageNo])  
    return <div className={styles.container}>  
           <ListPosts/>  
    </div>
}
export default Home; 