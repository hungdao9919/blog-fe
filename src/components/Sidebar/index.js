 import { useState,useEffect } from "react";
  function Sidebar (){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://34.125.251.148:3000/public-posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    
    },[])
    return <div>
        <p>Noi dung Side bar nha </p>
        {posts.map((post,index)=><a href={`${post.it}`} key={index}>{post.title}</a>)}
    </div>

}
export default Sidebar;