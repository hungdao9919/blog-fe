import styles from './PostEditor.module.scss'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


function PostEditor(){
    // return <div>PostEditor</div>

    const [title, setTitle] = useState('')
    const [postcontent, setPostcontent] = useState('')
    const [errorSubmit, setErrorSubmit] = useState('')
    const {auth} = useContext(GlobalContext) 
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await fetch("http://34.125.251.148:3000/post",{
                method:"POST",
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('at'), 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                body: JSON.stringify({"title":title,"postcontent":postcontent}) 
            })
            .then((response) => response.json())
            .then((data) => {
                if(data?.message){
                    setErrorSubmit(data.message)
                }
                else{
                    console.log(data)
                }
                 
            }) 
    }
    return <div className={styles.post_editor_wrapper}>
        <form onSubmit={handleSubmit}>
            <div className={styles.post_editor_container}>
                <label htmlFor="uname"><b>Title</b></label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" name="title" required/>

                <label htmlFor="psw"><b>content</b></label>
                <textarea rows="4" cols="50" onChange={(e)=>setPostcontent(e.target.value)} value={postcontent}  type="text" placeholder="Enter content" name="psw" required/>

                <button type="submit">Post</button>
                <p>{errorSubmit && `Lỗi ${errorSubmit}` }</p>
            </div>
        </form>
    </div>
}
export default PostEditor;