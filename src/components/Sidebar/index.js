 import { useState,useEffect } from "react";
  function Sidebar (){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://34.125.251.148:3000/public-posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    
    },[])
    return <ul>
        <p>Noi dung Side bar nha </p>
        {posts.map((post,index)=><li key={index}>{post.title}</li>)}
    </ul>

}
export default Sidebar;