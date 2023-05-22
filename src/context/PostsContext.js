import { useState, createContext} from 'react' 
 
const PostsContext = createContext()

const PostsProvider = ({children})=>{  
    const [posts,setPosts] = useState([]); 
     
          
    return <PostsContext.Provider value={{posts,setPosts}}>
        {children}
    </PostsContext.Provider>
}
export {PostsProvider, PostsContext}
 