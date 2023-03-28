import styles from './Comment.module.scss'  
import { useContext, useState,useEffect } from 'react';
import { PostContext } from '../../context/PostContext'; 
import createComment from '../../services/createComment'; 
import getPublicComment from '../../services/getPublicComments';
import { hostAPI } from '../../services/configs';
import {GlobalContext} from '../../context/GlobalContext'
import deleteComment from '../../services/deleteComment'
import Button from '../Button'; 
function Comment(){    
    const {post,setPost} = useContext(PostContext)    
    const [del, setDel] = useState(false)
    const [comment, setComment] =useState('')
    const globalContext = useContext(GlobalContext)
        
    const handleCreateComment =async(e)=>{
        e.preventDefault();
        const createCommentResult =  await createComment(post.id,comment)  
        const newComment ={...createCommentResult.data,'profileImage':globalContext.profileInfo.profileImage,'username':globalContext.profileInfo.username}
        let sortedComments = post.comments.length > 0 ? post.comments.unshift(newComment) : post.comments.push(newComment)
        setPost(prev=>({'comments':(sortedComments),...prev})) 
        setComment('')
    } 
    const handleRemoveComment =  (id) => async ()=>{
        const deleteCommentResult =  await deleteComment(id)
        if(deleteCommentResult.status === 204){
            setDel(true)
        }

        
    }
    
    useEffect(()=>{
        async function getComments (){  
            if(post.id){
                const commentsResult  = await getPublicComment(post.id)   
                if(commentsResult.status === 200){ 
                    setPost(prev=>({...prev,'comments':commentsResult.data}))
                }
                else{
                    setPost(prev=>({...prev,'comments':[]}))

                }
            }
        }
        getComments()    
        
},[post.id])     
    return (<div className={styles.wrapper}> 

        <form onSubmit={handleCreateComment}>
            <div className={styles.post_editor_container}>
                <label htmlFor="comment"><b>Bình luận về bài viết này</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setComment(e.target.value)} value={comment}  type="text" placeholder="Enter content" name="comment" required/>
                <button type="submit">Post</button>                 
            </div>
        </form> 

        { del || (post?.comments?.length > 0 ? post.comments.map((comment,index)=>{ 
            return <div key={index} className={styles.container}>
            <img className={styles.profile_image} src={`${hostAPI}/${comment.profileImage}`} />   

            <p className={styles.username}>{comment.username}</p>   
            <p className={styles.comment_content}>{comment.commentcontent}</p>
            <p className={styles.date_created}>{comment.datecreated}</p> 
            {(globalContext.isAdmin ||  globalContext?.profileInfo?._id === comment.userid) && <Button small primary onClick={handleRemoveComment(comment.id)}>Xóa</Button>}

             
        </div>      
        }):<div>Không có bình luận nào về bài viết này</div>)}
    </div>)
                
}
export default Comment;