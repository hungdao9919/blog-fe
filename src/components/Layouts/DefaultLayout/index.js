import Header from '../../Header'
import Sidebar from '../../Sidebar'
import styles from './DefaultLayout.module.scss'


function DefaultLayout({children}){

    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.side_bar}><Sidebar/></div>
                <div className={styles.content_container}>{children}</div>
            </div>
            </div>
        </div>
    )
}
export default DefaultLayout