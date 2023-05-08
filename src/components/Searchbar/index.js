 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Searchbar.module.scss'        
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import search from '../../services/search'; 
import { Navigate, useNavigate } from 'react-router-dom';  

function Searchbar (){ 
    const [searchString, setSearchString] = useState('')
    const [searchResult, setSearchResult] = useState([]) 
    const navigate = useNavigate(Navigate)

    const handleSubmitSearch = async (e)=>{
        e.preventDefault(); 
        const searchResult = await search(searchString)
        setSearchResult(searchResult.data) 
    }
    const handleOnMouseLeave = ()=>{
        setSearchResult([]) 

    }
    const handleOnClickSearchItem = (item)=>{
        navigate(`/post-details/${item._id}`) 
    }
    return <div className={styles.search_wrapper}>
            
            <div  className={styles.search_container}>
            <form onSubmit={handleSubmitSearch}>
            <input value={searchString} onChange={(e)=>setSearchString(e.target.value)} placeholder='Search posts...' type='text'/>
            <button type='subit'>
                <FontAwesomeIcon icon={faSearch} />
            </button> 
            </form>
            </div>
            <div onMouseLeave={handleOnMouseLeave} className={styles.search_result}>
                {searchResult?.length>0 && searchResult.map((item, index)=>{
                        return <div onClick={()=>handleOnClickSearchItem(item)} key={index} className={styles.post_item}>
                        <p>{item.title}</p>  
                    </div> 
                    }) 
                }
                {/* <div className={styles.post_item}>
                    <p>Chính phủ cấm mua bán dữ liệu cá nhân Chính phủ cấm mua bán dữ liệu cá nhân Chính phủ cấm mua bán dữ liệu cá nhân Chính phủ cấm mua bán dữ liệu cá nhân </p>  
                </div> 
                <div className={styles.post_item}>
                    <p>Chính phủ cấm mua bán dữ liệu cá nhân </p>  
                </div>
                <div className={styles.post_item}>
                    <p>Chính phủ cấm mua bán dữ liệu cá nhân </p>
                     
                </div> */}
            </div>
        </div> 
     
    

} 
export default Searchbar;