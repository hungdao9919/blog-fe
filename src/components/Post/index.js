import styles from './Post.module.scss'  
import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
function Post({id,title,postcontent,datecreated,dateModify,username}){ 
    const postContext = useContext(PostsContext)
    const  handleSelectPost = () =>{ 
 
 
        postContext.setId(id)
        postContext.setTitle(title)
        postContext.setPostContent(postcontent)
        postContext.setDateCreated(datecreated)
        postContext.setDateModify(dateModify)
        postContext.setUsername(username) 

    }
    return <div onClick={()=>handleSelectPost()} className={styles.container}>
        {console.log('Render Post')}
        <p className={styles.title}>{title}</p>
        <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{datecreated}</p>
            <p className={styles.author}>{username}</p>
        </div>
         
    </div>
}
export default Post;