 
import styles from './Loadding.module.scss'
 


function Loadding(){ 
    

    return <div className={styles.wave}>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
    </div>
}  
export default Loadding;