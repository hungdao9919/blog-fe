 
import styles from './ListPosts.module.scss' 
import { useContext } from "react";   
import Post from "../../components/Post";
import { PostsContext } from "../../context/PostsContext";
import getPublicPosts from '../../services/getPublicPosts';
import { PostContext } from '../../context/PostContext';
  function ListPosts (){ 
    const {posts,setPosts} = useContext(PostsContext)
    const {post, setPost} = useContext(PostContext)  
    const pageNo =[]
    for(let i = 1 ; i <= posts.totalPage ; i++){
        pageNo.push(i)
    }
    const handleSelectPageNo =  async(pageNoitem)=>{
        if(pageNoitem != posts.pageNo){
            
            let data = await getPublicPosts(pageNoitem)  
            const postsResult = data.postsResult 
            setPosts(data)         
            setPost(postsResult[0])
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
            {posts?.postsResult?.length > 0 && posts.postsResult.map((post,index)=><Post  key={index} _id={post._id} userid={post.userid}  title={post.title} updatedAt={post.updatedAt} postcontent={post.postcontent} createdAt={post.createdAt} username={post.username} />)}
        </div> 
    </div>   
    </div>
     
    

}
export default ListPosts;