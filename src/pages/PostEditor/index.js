import styles from './PostEditor.module.scss'
import { useState } from 'react' 
import createPost from '../../services/createPost'
import generateNewAcessToken from "../../services/generateNewAccessToken";



function PostEditor(){
     

    const [title, setTitle] = useState('')
    const [postcontent, setPostcontent] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const  createPostResult = await createPost(title,postcontent) 
         
    }
    const handleNewAcessToken = async ()=>{
        const newAcessToken = await generateNewAcessToken() 
    }
    return <div className={styles.post_editor_wrapper}>
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}>
                <label htmlFor="uname"><b>Title</b></label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" name="title" required/>

                <label htmlFor="psw"><b>content</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setPostcontent(e.target.value)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>

                <button type="submit">Post</button>

                 
            </div>
        </form>
        <button onClick = {handleNewAcessToken} >Tao token moi </button>
    </div>
}
export default PostEditor;