import { useState, createContext,useEffect} from 'react' 
const PostsContext = createContext()

const PostsProvider = ({children})=>{ 
    const [title,setTitle] = useState('')
    const [postContent,setPostContent] = useState('')
    const [id,setId] = useState('')
    const [dateModify,setDateModify] = useState('')
    const [dateCreated,setDateCreated] = useState('')
    const [username,setUsername] = useState('')
    


     
     
    return <PostsContext.Provider value={{title,setTitle,postContent,setPostContent,id,setId,dateModify,setDateModify,dateCreated,setDateCreated,username,setUsername}}>
        {children}
    </PostsContext.Provider>
}
export {PostsProvider, PostsContext}
