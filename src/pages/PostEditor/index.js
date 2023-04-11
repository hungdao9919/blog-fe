import styles from './PostEditor.module.scss'
import { useEffect, useState } from 'react' 
import createPost from '../../services/createPost' 
import { useNavigate} from 'react-router-dom' 
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react'  
import updatePost from '../../services/updatePost'
function PostEditor(){
    const navigate = useNavigate();

    const globalContext = useContext(GlobalContext)  
    console.log(globalContext)
    const {post,setPost} = useContext(GlobalContext) 
    const isLogged = globalContext.isLogged 
    const [title, setTitle] = useState('')
    const [postcontent, setPostcontent] = useState('') 
    useEffect(()=>{
        console.log('post thay doi')
        if(post?._id){
            setTitle(post.title)
            setPostcontent(post.postcontent)
        }
        else{
            setTitle('')
            setPostcontent('')
        }
           
    },[post])
    if(!isLogged){
        navigate('/')
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const  createPostResult = await createPost(title,postcontent)  
        setPost({'_id':createPostResult._id,'title':createPostResult.title,'postcontent':createPostResult.postcontent,'createdAt':createPostResult.createdAt,'updatedAt':createPostResult.updatedAt,'username':globalContext.profileInfo.username}) 
        navigate(`/post-details/${createPostResult._id}`)
    }
    const handleUpdate = async(e)=>{
        e.preventDefault();
        const updateResult = await updatePost(post._id,title,postcontent) 
    }
    const handleOnChangeTitle = (e)=>{
        setTitle(e.target.value)
        e.target.style.height = '0'
        e.target.style.height = `${e.target.scrollHeight}px` 
    }
    const handleOnChangePostContent = (e)=>{
        setPostcontent(e.target.value)
        e.target.style.height = '456px'
        e.target.style.height = `${e.target.scrollHeight}px` 
    }
    return <div className={styles.post_editor_wrapper}>
        {console.log('Render PostEditor')}
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}> 
                {post?._id ?<span>Edit post</span> :<span>Create new post</span>}
                <div className={styles.title_area_container}>
                    <textarea rows="1" cols="120"  onChange={(e)=>handleOnChangeTitle(e)} value={title} type="text" placeholder="Enter title" name="title" required/>
                </div>

                <div className={styles.content_area_container}>
                    <textarea rows="30" cols="120" onChange={(e)=>handleOnChangePostContent(e)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>
                </div> 
                 
            </div>
            {post?._id ?<button onClick={handleUpdate} >Update</button> :<button type="submit">Post</button>}
        </form> 
    </div>
}
export default PostEditor;