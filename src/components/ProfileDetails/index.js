 
import styles from './ProfileDetails.module.scss'         
import getUserDetail from '../../services/getUserdetail'
import { useEffect, useState,useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';    
import getDateTimeFromTimeStamp from '../../services/getDateTimeFromTimeStamp'; 
import { PostsContext } from '../../context/PostsContext';
import getPublicPosts from '../../services/getPublicPosts';
import MiniPost from '../MiniPost';
import getPublicComments from '../../services/getPublicComments'
import Button from '../Button';
function ProfileDetails (){  
    const globalContext = useContext(GlobalContext) 
    const setIsLoading = globalContext.setIsLoading
    const profileInfo = globalContext.profileInfo  
    const location = useLocation(); 
     
    const {posts,setPosts} = useContext(PostsContext) 
    const [infor, setInfor] = useState({})  
    const [comment, setComment] = useState({})
    const [select, setSelect] = useState('info')
    const pageNo = []
    if(posts.totalPage > 1){ 
        for(let i = 1 ; i <= posts.totalPage ; i++){
            pageNo.push(i)
        }  
    } 
    const handleSelectPageNo =  async(pageNoitem)=>{ 
        if(pageNoitem != posts.pageNo){
            if(location.pathname.split('/')[1] ==='profile-details' || location.pathname.split('/')[1] ==='profile'){
                
                let data = await getPublicPosts(pageNoitem,infor._id)  
                const postsResult = data.postsResult 
                setPosts(data)  
            }
            else{
                let data = await getPublicPosts(pageNoitem)  
                const postsResult = data.postsResult 
                setPosts(data)         
            }
            
        }    
         
    }
    useEffect(  () => {  
        setIsLoading(true)

        if(location.pathname.includes('/profile-details/') || location.pathname.split('/')[1] ==='profile'){ 
            const userId =location.pathname.split('/')[2];  
            
            
            switch(select){
                case 'info' :
                    async function getInfo(){
                        const userDetailResult =  await getUserDetail(userId)  
                        setInfor(userDetailResult)   
                    }
                    getInfo()
                    break; 
                case 'posts':
                    async function getPosts (){   
                        const getPostsResult = await getPublicPosts(1,infor._id)    
                        setPosts(getPostsResult)        
                      }
                    getPosts() 
                    break; 
                case 'comments':
                    async function getComment (){    
                        const publicComments = await getPublicComments({'userId':infor._id,'pageNo':1}) 
                        setComment(publicComments.data)          
                      }
                      getComment() 
                    break; 

            }
             
        }
        else {
            setInfor(profileInfo)

        }
        setTimeout(()=>{
            setIsLoading(false)
        },600)
    },[select])    
    const handleViewMoreComment = async ()=>{ 
        const currentPage = parseInt(comment.pageNo) + 1 
        const commentsResult  = await getPublicComments({'userId':infor._id,'pageNo':currentPage})  
        console.log(commentsResult)  
        setComment(commentsResult.data)        

    }  
    const convertedCreatedDateObj = getDateTimeFromTimeStamp(infor.createdAt)  
    return <div className={styles.profile_details_container}> 
        {console.log('ProfileDetails render')}
        <div className={styles.profile_header}>
            <div className={styles.profile_image_container}>
            <img width='200px' height='200px' src={`${infor.profileImage}`}/> 
            </div>
            <div className={styles.profile_fullname}>
                <p>{infor.lastname} {infor.firstname}</p> 
            
            </div>
        </div>
        <div className={styles.profile_body}>
            <div className={styles.tabs_container}>
                <p onClick={()=>setSelect('info')}   className={`${styles.basic_infor} ${select==='info'?styles.selected : ''}`}>Basic Information</p>
                <p onClick={()=>setSelect('posts')} className={`${styles.posts} ${select==='posts'?styles.selected : ''}`}>Posts</p>
                <p onClick={()=>setSelect('comments')} className={`${styles.comments} ${select==='comments'?styles.selected : ''}`}>Comments</p>
            </div>
            {select ==='info' && <div className={styles.profile_tab_details}>
                <p>Username: {infor.username}</p>  
                <p>Email: {infor.email}</p>
                {infor.createdAt && <p>Joined date: {convertedCreatedDateObj.hour}:{convertedCreatedDateObj.minute}:{convertedCreatedDateObj.second} {convertedCreatedDateObj.day}/{convertedCreatedDateObj.month}/{convertedCreatedDateObj.year}</p>}
            </div>}
            {select ==='posts' && <div className={styles.list_posts}>
                {posts?.postsResult?.length > 0 ? posts.postsResult.map((post,index)=><MiniPost  key={index} _id={post._id} userid={post.userid}  title={post.title} updatedAt={post.updatedAt} postcontent={post.postcontent} createdAt={post.createdAt} username={post.username}  />) : <div className={styles.nocmt}>No post yet</div>}
                <div className={styles.page_number}>
                    { pageNo.length > 0 &&
                    pageNo.map((pageNoitem,index) =>{
                        return <li className={pageNoitem==posts.pageNo?styles.page_no_selected:''} key={index} onClick={()=>handleSelectPageNo(pageNoitem)}>{pageNoitem}</li>
                    })
                    }
                </div>
            </div>}
            {select ==='comments' &&  <div className={styles.list_comments}>
                 
                {
                    comment?.commentResult?.length > 0 ? comment.commentResult.map((item,index)=>{
                        return <div className={styles.comment} key={index}>
                            <p>{item.commentcontent}</p>
                            <div className={styles.viewpost_btn} >
                            <Button primary small underline to={`/post-details/${item.postid}`}>View this post</Button>
                            </div>
                        </div> 
                    }): <div className={styles.nocmt}>No comment yet</div>
                }   
                {comment.pageNo !=comment.totalPage && <div className={styles.viewmore_btn}>
                <p onClick={handleViewMoreComment}>
                    View more comments
                </p>
            </div>}  
            </div>}
            
            </div>
            <div>
                
            </div>
        </div> 
     
    

} 
export default ProfileDetails;