import styles from './ListPosts.module.scss' 
import { useContext } from "react";   
import Post from "../../components/Post";
import { PostsContext } from "../../context/PostsContext";
import getPublicPosts from '../../services/getPublicPosts'; 
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

  function ListPosts (){  
    const location = useLocation();
    const globalContext = useContext(GlobalContext) 
    const {posts,setPosts} = useContext(PostsContext) 
    const pageNo =[]
    if(posts.totalPage > 1){
        
        for(let i = 1 ; i <= posts.totalPage ; i++){
            pageNo.push(i)
        }  
    } 
    const handleSelectPageNo =  async(pageNoitem)=>{
        if(pageNoitem != posts.pageNo){
            if(location.pathname.split('/')[1] ==='myposts'){
                let data = await getPublicPosts(pageNoitem,globalContext.profileInfo._id)  
                const postsResult = data.postsResult 
                setPosts(data)  
            }
            else{
                let data = await getPublicPosts(pageNoitem)  
                const postsResult = data.postsResult 
                setPosts(data)         
            }
            
        } 
         
         
    } 
    return <div className={styles.wrapper}>
    <div className={styles.container}> 
            {console.log('Render ListPosts')}
             
            {posts?.postsResult?.length > 0 && posts.postsResult.map((post,index)=><Post  key={index} _id={post._id} profileImage={post.postimage} userid={post.userid}  title={post.title} updatedAt={post.updatedAt} postcontent={post.postcontent} createdAt={post.createdAt} username={post.username}  />)}
        
    </div>   
    <div className={styles.page_number}>
        { pageNo.length > 0 &&
        pageNo.map((pageNoitem,index) =>{
            return <li className={pageNoitem==posts.pageNo?styles.page_no_selected:''} key={index} onClick={()=>handleSelectPageNo(pageNoitem)}>{pageNoitem}</li>
        })
        }
    </div>
    </div>
     
    

}
export default ListPosts;