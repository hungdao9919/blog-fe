 
import Header from '../../Header' 
import { useContext } from 'react'
import styles from './HeaderOnlyLayout.module.scss'
import { GlobalContext } from '../../../context/GlobalContext'
function HeaderOnlyLayout({children}){ 

    {console.log('render headerOnly layout')}
    return (
        <div>
            <Header/>
            <div className={styles.content_container}> 
                <div className='content'>{children}</div>
            </div> 
        </div>
    )
}
export default HeaderOnlyLayout