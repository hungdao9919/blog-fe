import styles from './Header.module.scss'
function Header(){
     
    return <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
            <div className={styles.logo_container}>Logo</div>
            <div className={styles.navigation_container}>Navigation</div>
            <div className={styles.actions_container}>Actions</div>
        </div>
    </div>
}
    
export default Header;