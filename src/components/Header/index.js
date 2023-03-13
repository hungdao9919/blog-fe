import styles from './Header.module.scss'
import Button from '../Button';
function Header(){
     
    return <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
            <div className={styles.logo_container}>Logo</div>
            <div className={styles.navigation_container}>Navigation</div>
            <div className={styles.actions_container}> 
            <Button   primary  to='/profile'>Profile</Button> 
            </div>
        </div>
    </div>
}
    
export default Header;