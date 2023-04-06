import styles from './Comment.module.scss'  
import { useContext, useState,useEffect } from 'react'; 
import createComment from '../../services/createComment'; 
import CommentDetails from '../CommentDetails';
import getPublicComment from '../../services/getPublicComments'; 
import {GlobalContext} from '../../context/GlobalContext' 
function Comment(){    
    const {post,setPost} = useContext(GlobalContext)     
    const [comment, setComment] =useState('')
    const globalContext = useContext(GlobalContext) 
    const handleCreateComment =async(e)=>{
        e.preventDefault(); 
        const createCommentResult =  await createComment(post._id,comment)   
        const newComment ={...createCommentResult.data,'profileImage':globalContext.profileInfo.profileImage,'username':globalContext.profileInfo.username}
        let sortedComments = post.comments.length > 0 ? post.comments.unshift(newComment) : post.comments.push(newComment)
        setPost(prev=>({'comments':(sortedComments),...prev})) 
        setComment('')
    }          
    useEffect(()=>{
        async function getComments (){  
            if(post._id){
                const commentsResult  = await getPublicComment(post._id)   
                 
                if(commentsResult.status === 200){ 
                    setPost(prev=>({...prev,'comments':commentsResult.data}))
                }
                else{
                    setPost(prev=>({...prev,'comments':[]}))

                }
            }
        }
        getComments()    
        
},[post._id])      
    return (<div className={styles.wrapper}> 
        {console.log('Render comment')} 
        { globalContext.isLogged &&
            <form onSubmit={handleCreateComment}>
            <div className={styles.post_editor_container}>
                <label htmlFor="comment"><b>Bình luận về bài viết này</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setComment(e.target.value)} value={comment}  type="text" placeholder="Enter content" name="comment" required/>
                <button type="submit">Post</button>                 
            </div>
        </form> 
        }
        
        {(post?.comments?.length > 0 ? post.comments.map((comment,index)=>{  
            return  <CommentDetails key={index} profileImage={comment.profileImage} username ={comment.username}  commentcontent ={comment.commentcontent}  createdAt={comment.createdAt}  userid ={comment.userid}  _id ={comment._id} />
        }):<div>Không có bình luận nào về bài viết này</div>)}
    </div>)
                
}
export default Comment;