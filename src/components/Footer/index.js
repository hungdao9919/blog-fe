import styles from './Footer.module.scss'  
function Footer(){
     
    return <div className={styles.footer_wrapper}>
       <div className={styles.info_container}>
       <div>
            <ul>
                <li>Lamsitemmo</li>
                <li>Lamsitemmo</li>
                <li>Lamsitemmo</li>
            </ul>
        </div>
        <div>
            <p>
                Inoffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </p>
        </div>
        <div>
            <ul>
                <li>Facebook</li>
                <li>Tiktok</li>
                <li>Youtube</li>
            </ul>
        </div>
       </div>
        <div className={styles.absolute_footer}>
        Copyrights 2022
        </div>
    </div>
}
    
export default Footer;