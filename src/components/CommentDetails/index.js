
import styles from './CommentDetails.module.scss'   
import { useContext,useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import deleteComment from '../../services/deleteComment';
import Button from '../Button';  
import Username from '../Username';
import getDateTimeFromTimeStamp from '../../services/getDateTimeFromTimeStamp';
function CommentDetails({index,profileImage,username,commentcontent,createdAt,userid,_id}){    
    const globalContext = useContext(GlobalContext)
    const [del, setDel] = useState(false)
    const convertedDateObj = getDateTimeFromTimeStamp(createdAt)  
    const handleRemoveComment =  (_id) => async ()=>{
        if(window.confirm(`Do you want to delete this comment? ${commentcontent}`)){ 
            const deleteCommentResult =  await deleteComment(_id)
            if(deleteCommentResult.status === 204){ 
                setDel(true)
            }
        }
    }    
    return (del || <div key={index} className={styles.container}>
        <img className={styles.profile_image} src={`${profileImage}`} /> 
        <div className={styles.comment_detail_container}>
        <div className={styles.username_container}>
        <Username username={username} />  
        </div>
        <p className={styles.comment_content}>{commentcontent}</p>
        <div className={styles.comment_footer}>
        <p className={styles.date_created}>{convertedDateObj.hour}:{convertedDateObj.minute}:{convertedDateObj.second} {convertedDateObj.day}/{convertedDateObj.month}/{convertedDateObj.year}</p>  
        {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === userid) && <Button small primary onClick={handleRemoveComment(_id)}>Xóa</Button>}
        </div>
        </div> 
</div>  )
}
export default CommentDetails;