
import styles from './CommentDetails.module.scss'  
 
import { hostAPI } from '../../services/configs';
import { useContext,useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import deleteComment from '../../services/deleteComment';
import Button from '../Button'; 
function CommentDetails({index,profileImage,username,commentcontent,datecreated,userid,_id}){    
    const globalContext = useContext(GlobalContext)
    const [del, setDel] = useState(false)

    const handleRemoveComment =  (_id) => async ()=>{
        const deleteCommentResult =  await deleteComment(_id)
        if(deleteCommentResult.status === 204){
            console.log('remove comment', _id)
            setDel(true)
        }
    }   
    return (del || <div key={index} className={styles.container}>
        <img className={styles.profile_image} src={`${hostAPI}/${profileImage}`} />   
        <p className={styles.username}>{username}</p>   
        <p className={styles.comment_content}>{commentcontent}</p>
        <p className={styles.date_created}>{datecreated}</p> 
    {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleRemoveComment(_id)}>Xóa</Button>}
</div>  )
}
export default CommentDetails;