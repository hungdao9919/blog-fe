 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Searchbar.module.scss'        
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
function Searchbar (){ 
 
    return <div className={styles.search_wrapper}>
            
            <input placeholder='Search posts...' type='text'/>
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
             

        </div> 
     
    

} 
export default Searchbar;