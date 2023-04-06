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
        setTitle('')
        setPostcontent('')
    }
    const handleUpdate = async(e)=>{
        e.preventDefault();
        const updateResult = await updatePost(post._id,title,postcontent) 
    }
 
    return <div className={styles.post_editor_wrapper}>
        {console.log('Render PostEditor')}
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}>
                <label htmlFor="uname"><b>Title</b></label>
                <textarea rows="5" cols="90"  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" name="title" required/>

                <label htmlFor="psw"><b>content</b></label>
                <textarea rows="30" cols="90" onChange={(e)=>setPostcontent(e.target.value)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>

                 {post?._id ?<button onClick={handleUpdate} >Update</button> :<button type="submit">Post</button>}

                 
            </div>
        </form> 
    </div>
}
export default PostEditor;