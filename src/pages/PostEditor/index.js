import styles from './PostEditor.module.scss'
import { useState } from 'react' 
import createPost from '../../services/createPost' 
import { useNavigate} from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react' 
import { PostContext } from '../../context/PostContext';
import {PostEditorContext} from '../../context/PostEditorContext'
import updatePost from '../../services/updatePost'
function PostEditor(){
    const navigate = useNavigate();

    const globalContext = useContext(GlobalContext) 
    const {isEdit,setIsEdit} = useContext(PostEditorContext) 
    const {post,setPost} = useContext(PostContext)  
    const isLogged = globalContext.isLogged 
    const [title, setTitle] = useState(isEdit?post.title :'')
    const [postcontent, setPostcontent] = useState(isEdit?post.postcontent :'') 
    console.log(isEdit)
    console.log(isEdit?post.title :'')
    console.log(isEdit?post.postcontent :'') 
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
        const updateResult = await updatePost(post.id,title,postcontent)
       console.log('ga',updateResult)
    }
 
    return <div className={styles.post_editor_wrapper}>
        {console.log('Render PostEditor')}
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}>
                <label htmlFor="uname"><b>Title</b></label>
                <textarea rows="5" cols="90"  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" name="title" required/>

                <label htmlFor="psw"><b>content</b></label>
                <textarea rows="30" cols="90" onChange={(e)=>setPostcontent(e.target.value)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>

                { isEdit ?<button onClick={handleUpdate} >Update</button> : <button type="submit">Post</button>}

                 
            </div>
        </form> 
    </div>
}
export default PostEditor;