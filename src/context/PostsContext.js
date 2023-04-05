import { useState, createContext,useEffect, useContext} from 'react' 
import getPublicPosts from "../services/getPublicPosts";
import { PostContext } from './PostContext';
const PostsContext = createContext()

const PostsProvider = ({children})=>{ 
    const {post,setPost} = useContext(PostContext) 
    const [posts,setPosts] = useState([]); 

    let data
    useEffect(  () => {
        async function getPosts (callback){
            data = await getPublicPosts(1)  
            const postsResult = data.postsResult
             
            setPosts(data)   
            callback(postsResult)     
             
        }
        getPosts(callback)
    },[])
    const callback =(postsResult)=>{ 
        setPost(postsResult[0])
    }     
     
    return <PostsContext.Provider value={{posts,setPosts}}>
        {children}
    </PostsContext.Provider>
}
export {PostsProvider, PostsContext}
 