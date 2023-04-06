 
import styles from './ListPosts.module.scss' 
import { useContext } from "react";   
import Post from "../../components/Post";
import { PostsContext } from "../../context/PostsContext";
import getPublicPosts from '../../services/getPublicPosts';
import { PostContext } from '../../context/PostContext';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

  function ListPosts (){ 
    const navigate = useNavigate();
    const location = useLocation();
    const globalContext = useContext(GlobalContext)
    const {posts,setPosts} = useContext(PostsContext)
    const {post, setPost} = useContext(PostContext)   
    const pageNo =[]
    for(let i = 1 ; i <= posts.totalPage ; i++){
        pageNo.push(i)
    }  
    const  handleSelectPost = (_id,title,postcontent,createdAt,updatedAt,username) =>{ 
       
            setPost({'_id':_id,'title':title,'postcontent':postcontent,'createdAt':createdAt,'updatedAt':updatedAt,'username':username}) 
            navigate(`/post-details/${_id}`)   
        
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
        <div className={styles.sidebar_container}>
            {console.log('Render ListPosts')}
            <p>Danh sách bài viết </p>
            <div className={styles.page_number}>
                { 
                pageNo.map((pageNoitem,index) =>{
                    return <li className={pageNoitem==posts.pageNo?styles.page_no_selected:''} key={index} onClick={()=>handleSelectPageNo(pageNoitem)}>{pageNoitem}</li>
                })
                }
            </div>
            {posts?.postsResult?.length > 0 && posts.postsResult.map((post,index)=><Post  key={index} _id={post._id} userid={post.userid}  title={post.title} updatedAt={post.updatedAt} postcontent={post.postcontent} createdAt={post.createdAt} username={post.username} callback={()=>{handleSelectPost(post._id,post.title,post.postcontent,post.createdAt,post.updatedAt,post.username)}} />)}
        </div> 
    </div>   
    </div>
     
    

}
export default ListPosts;