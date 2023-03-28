import styles from './PostEditor.module.scss'
import { useState } from 'react' 
import createPost from '../../services/createPost' 
import { useNavigate} from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react' 

function PostEditor(){
    const navigate = useNavigate();

    const globalContext = useContext(GlobalContext) 
    const isLogged = globalContext.isLogged
    const [title, setTitle] = useState('')
    const [postcontent, setPostcontent] = useState('')
    if(!isLogged){
        navigate('/')
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const  createPostResult = await createPost(title,postcontent) 

         setTitle('')
         setPostcontent('')
    }
 
    return <div className={styles.post_editor_wrapper}>
        {console.log('Render PostEditor')}
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}>
                <label htmlFor="uname"><b>Title</b></label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" name="title" required/>

                <label htmlFor="psw"><b>content</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setPostcontent(e.target.value)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>

                <button type="submit">Post</button>

                 
            </div>
        </form> 
    </div>
}
export default PostEditor;