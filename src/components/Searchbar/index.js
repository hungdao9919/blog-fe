 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Searchbar.module.scss'        
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import search from '../../services/search';
import Button from '../Button';
function Searchbar (){ 
    const [searchString, setSearchString] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const handleSubmitSearch = async (e)=>{
        e.preventDefault(); 
        const searchResult = await search(searchString)
        setSearchResult(searchResult.data) 
    }
    const handleOnMouseLeave = ()=>{
        // setSearchResult([]) 

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
                {/* {searchResult?.length>0 && searchResult.map((item, index)=>{
                        return <div key={index}>
                            <p>{item.title}</p>
                            <Button to={`/post-details/${item._id}`}>View post</Button>
                        </div>
                    }) 
                } */}
                <div className={styles.post_item}>
                    <p>Chính phủ cấm mua bán dữ liệu cá nhân </p>
                    <Button underline small primary>View post</Button>
                </div>
            </div>
        </div> 
     
    

} 
export default Searchbar;