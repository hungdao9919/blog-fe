 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Searchbar.module.scss'        
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import search from '../../services/search'; 
import { Navigate, useNavigate } from 'react-router-dom';  

function Searchbar (){ 
    const [searchString, setSearchString] = useState('')
    const [searchResult, setSearchResult] = useState() 
    const [showResult, setShowResult] = useState(false) 
    const navigate = useNavigate(Navigate) 
    const handleSubmitSearch = async (e)=>{
        e.preventDefault(); 
        const searchResult = await search(searchString)  
        setSearchResult(searchResult.data)  
        setShowResult(true) 
         
    } 
    const handleOnMouseLeave = ()=>{
        setShowResult(false)

    }
    const handleOnClickSearchItem = (item)=>{
        navigate(`/post-details/${item._id}`)  
        setShowResult(false)

    }

    return <div className={styles.search_wrapper}>
            
            <div  className={styles.search_container}>
            <form onSubmit={handleSubmitSearch}>
            <input onFocus={()=>setShowResult(true)} value={searchString} onChange={(e)=>setSearchString(e.target.value)} placeholder='Search posts...' type='text'/>
            <button type='submit'>
                <FontAwesomeIcon icon={faSearch} />
            </button> 
            </form>
            </div> 
           {showResult && <div onMouseLeave={handleOnMouseLeave} className={styles.search_result}>
                {searchResult?.length > 0 && searchResult.map((item, index)=>{
                     
                        return <div onClick={()=>handleOnClickSearchItem(item)} key={index} className={styles.post_item}>
                        <p>{item.title}</p>  
                    </div> 
                    }) 
                }
                {searchResult?.length == 0 && <div className={styles.not_have_results}>Do not have any posts</div>
             }
               

            </div>}
        </div> 
     
    

} 
export default Searchbar;