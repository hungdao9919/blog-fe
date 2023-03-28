import styles from './Posts.module.scss'  
import ListPosts from "../../components/ListPosts"; 
import PostDetail from '../../components/PostDetail' 
  function Posts (){  
    return <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.sidebar_container}> 
           <ListPosts/>
        </div>
        <div className={styles.content_container}> 
            <PostDetail/>
        </div>
    </div>  
    </div>
     
    

}
export default Posts;