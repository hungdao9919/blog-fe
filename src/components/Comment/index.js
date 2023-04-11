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
    const handleCreateComment = async (e)=>{
        e.preventDefault(); 
        const createCommentResult =  await createComment(post._id,comment)   
        const newComment ={...createCommentResult.data,'profileImage':globalContext.profileInfo.profileImage,'username':globalContext.profileInfo.username}  
        let sortedComments = post?.comments?.length > 0 ? post.comments.unshift(newComment) : post.comments =[newComment]
        setPost(prev=>({'comments':(sortedComments),...prev})) 
        setComment('') 

    }          
    useEffect(()=>{
        async function getComments (){  
            if(post._id){
                const commentsResult  = await getPublicComment(post._id)   
                 
                if(commentsResult.status == 200 || commentsResult.status == 204){  
                    const allComments = commentsResult.data?commentsResult.data:[] 
                     
                    setPost(prev=>({...prev,'comments':allComments}))
                }
                else{
                    setPost(prev=>({...prev,'comments':[]}))

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
                        {/* scale thêm chức năng upload hình ảnh,... */}
                    </div>
                </div>
                           
            </div>
        </form> 
        } 
        {(post?.comments?.length > 0 ? post.comments.map((comment,index)=>{  
            return  <CommentDetails key={index} profileImage={comment.profileImage} username ={comment.username}  commentcontent ={comment.commentcontent}  createdAt={comment.createdAt}  userid ={comment.userid}  _id ={comment._id} />
        }):<div>No comment yet</div>)}
    </div>)
                
}
export default Comment;