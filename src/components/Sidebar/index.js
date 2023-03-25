 import { useState,useEffect } from "react";
 import getPublicPosts from "../../services/getPublicPosts";
  function Sidebar (){
    const [posts, setPosts] = useState([]);
  
    useEffect(  () => {
        async function getPosts (){
            const postsResult = await getPublicPosts()
            setPosts(postsResult)
        }
        getPosts()
    },[])
    
    return <div>
        <p>Noi dung Side bar nha </p>
        {posts.length>0 && posts.map((post,index)=><li  key={index}>{post.title}</li>)}
    </div>

}
export default Sidebar;