import styles from './PostEditor.module.scss'
import { useEffect, useState } from 'react' 
import createPost from '../../services/createPost' 
import { useNavigate} from 'react-router-dom' 
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react'  
import updatePost from '../../services/updatePost'
import uploadFile from '../../services/uploadFile';
function PostEditor(){
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext)   
    const setIsLoading = globalContext.setIsLoading
    
    const {post,setPost} = useContext(GlobalContext)  
    const isLogged = globalContext.isLogged 
    const [title, setTitle] = useState('')
    const [postcontent, setPostcontent] = useState('') 
    const [postImage, setPostImage] = useState()     
  
    
    useEffect(()=>{
        console.log('post thay doi')
        if(post?._id){
            setTitle(post.title)
            setPostcontent(post.postcontent)
            console.log(post)
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
        setIsLoading(true)
        e.preventDefault();
        const imageResult = await uploadFile(postImage)
        const  createPostResult = await createPost(title,postcontent,imageResult)  
        setIsLoading(true)
        setPost({'_id':createPostResult._id,'title':createPostResult.title,'postcontent':createPostResult.postcontent,'createdAt':createPostResult.createdAt,'updatedAt':createPostResult.updatedAt,'username':globalContext.profileInfo.username}) 
        navigate(`/post-details/${createPostResult._id}`)
    }
    const handleUpdate = async(e)=>{
        e.preventDefault();
         
        if(postImage){
            const imageResult = await uploadFile(postImage) 
            const data = {
                "postID":post._id,
                "title": title,
                "postcontent": postcontent,
                "postimage":imageResult
            }
            const updateResult = await updatePost(data) 
        }
        else{
            const data = {
                "postID":post._id,
                "title": title,
                "postcontent": postcontent, 
            }
            const updateResult = await updatePost(data)  
            
        }
        
        navigate(`/post-details/${post._id}`)
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
                <div className={styles.file_container}>
                    <label>Choose post image</label>
                    <input onChange={(e)=>{ setPostImage(e.target.files[0])}} accept="image/*"  type='file' />
                </div> 
                <div className={styles.image_preview_container}>
                    {!postImage && post?._id && <img width='400px' height='400px' style={{objectFit:'cover'}} src={post.postImage}/>}
                    {postImage&& <img width='400px' height='400px' style={{objectFit:'cover'}} src={URL.createObjectURL(postImage)}/>}
                </div> 
                 
            </div>
            {post?._id ?<button onClick={handleUpdate} >Update</button> :<button type="submit">Post</button>}
        </form> 
    </div>
}
export default PostEditor;