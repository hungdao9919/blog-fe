import styles from './Comment.module.scss'  
import { useContext, useState,useEffect,useRef } from 'react'; 
import createComment from '../../services/createComment'; 
import CommentDetails from '../CommentDetails';
import getPublicComment from '../../services/getPublicComments'; 
import {GlobalContext} from '../../context/GlobalContext' 
function Comment(){    
    const ref = useRef()

    const {post,setPost} = useContext(GlobalContext)      
    const [comment, setComment] =useState('')
    const globalContext = useContext(GlobalContext)   
    const [commentList, setCommmentList] = useState({})
    const handleCreateComment = async (e)=>{
        e.preventDefault(); 
        const createCommentResult =  await createComment(post._id,comment)   
        const newComment ={...createCommentResult.data,'profileImage':globalContext.profileInfo.profileImage,'username':globalContext.profileInfo.username}  
        let sortedComments = commentList?.commentResult?.length > 0 ? commentList.commentResult.unshift(newComment) : commentList.commentResult =[newComment]
        setPost(prev=>({'comments':(sortedComments),...prev})) 
        setComment('')  
        ref.current.style.height = '28px'
    } 
    const handleViewMoreComment = async ()=>{ 
        const currentPage = parseInt(commentList.pageNo) + 1 
        const commentsResult  = await getPublicComment({'postId':post._id,'pageNo':currentPage})  
        console.log(commentsResult)  
        setCommmentList(commentsResult.data)        

    }   
    useEffect(()=>{
        async function getComments (){  
            if(post._id){
                const commentsResult  = await getPublicComment({'postId':post._id,'pageNo':1})   
                console.log('comment result',commentsResult) 
                if(commentsResult.status == 200 || commentsResult.status == 204){   
                    setCommmentList(commentsResult.data?commentsResult.data:[])  
                }
                else{
                    setCommmentList([])

                }
            }   
        }
        getComments()    
        
        
},[post._id])     
const handleOnchangComment = (e)=>{
    setComment(e.target.value) 
    e.target.style.height = '0'
    e.target.style.height = `${e.target.scrollHeight}px` 
} 
return (<div className={styles.wrapper}> 
    {console.log('Render comment')}  
    { globalContext.isLogged &&
        <form onSubmit={handleCreateComment}>
        <div className={styles.comment_editor_container}>
            {globalContext?.profileInfo && <label className={styles.image_label} htmlFor="comment"><b><img src={globalContext.profileInfo.profileImage} /></b></label>}
            <div className={styles.textarea_container}>
                <textarea ref={ref} rows='1' cols="50" onChange={(e)=>handleOnchangComment(e)} value={comment}  type="text" placeholder="Leave your comment for this post" id='comment' name="comment" required/>
                <div className={styles.comments_actions_container}>
                    <button type="submit">Post</button>       
                    {/*  thêm chức năng upload hình ảnh,... */}
                </div>
            </div>
                        
        </div>
    </form> 
    } 
    {(commentList?.commentResult?.length > 0 ? commentList?.commentResult?.map((comment,index)=>{   
        return  <CommentDetails key={index} profileImage={comment.profileImage} username ={comment.username}  commentcontent ={comment.commentcontent}  createdAt={comment.createdAt}  userid ={comment.userid}  _id ={comment._id} />
    }):<div className={styles.no_comment}>No comment yet</div>)}
    {commentList.pageNo !=commentList.totalPage && <div className={styles.viewmore_btn}>
        <p onClick={handleViewMoreComment}>
            View more comments
        </p>
    </div>}
</div>)
                
}
export default Comment;