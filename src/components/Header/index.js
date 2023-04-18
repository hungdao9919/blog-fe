import styles from './Header.module.scss' 
import Logo from '../Logo';
import Navigation from '../Navigation';
import ProfileActions from '../ProfileActions';
import Searchbar from '../Searchbar';
function Header(){
     
    return <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
            <div className={styles.logo_container}><Logo/></div>
            <div className={styles.navigation_container}><Navigation/></div>
            <div className={styles.searchbar_container}><Searchbar/></div>
            <div className={styles.actions_container}> 
            <ProfileActions/>
            </div>
        </div>
    </div>
}
    
export default Header;