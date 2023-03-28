import styles from './Comment.module.scss'  
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../context/PostsContext';
import getPublicComment from '../../services/getPublicComments';  
import createComment from '../../services/createComment';
import { hostAPI } from '../../services/configs';
function Comment(){   
    let commentsResult;
    const postContext = useContext(PostsContext)  
    useEffect(()=>{
        async function getComments (){  
            if(postContext.id){
                commentsResult  = await getPublicComment(postContext.id)      
                if(commentsResult.status === 200){
                    postContext.setComments(commentsResult.data)
                }
                else{
                    postContext.setComments([])

                }
            }
        }
        getComments()   
    },[postContext.id])

    const [comment, setComment] =useState('')
    const handleCreateComment =async(e)=>{
        e.preventDefault();
        const createCommentResult =  await createComment(postContext.id,comment) 
        postContext.setComments(prev=>[createCommentResult.data,...prev])
        console.log(createCommentResult.data)
        setComment('')
    }
    return (<div className={styles.wrapper}> 

        <form onSubmit={handleCreateComment}>
            <div className={styles.post_editor_container}>
                <label htmlFor="comment"><b>Bình luận về bài viết này</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setComment(e.target.value)} value={comment}  type="text" placeholder="Enter content" name="comment" required/>
                <button type="submit">Post</button>                 
            </div>
        </form> 

        {postContext.comments.length > 0 ? postContext.comments.map((comment,index)=>{ 
            return <div key={index} className={styles.container}>
            <img className={styles.profile_image} src={`${hostAPI}/${comment.profileImage}`} />   

            <p className={styles.username}>{comment.username}</p>   
            <p className={styles.comment_content}>{comment.commentcontent}</p>
            <p className={styles.date_created}>{comment.datecreated}</p> 
        </div>      
        }):<div>Không có bình luận nào về bài viết này</div>}

    </div>)
                
}
export default Comment;