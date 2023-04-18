 
import Header from '../../Header'
import Loadding from '../../Loadding'
import { useContext } from 'react'
import styles from './HeaderOnlyLayout.module.scss'
import { GlobalContext } from '../../../context/GlobalContext'
function HeaderOnlyLayout({children}){
    const {isLoading, setIsLoading} = useContext(GlobalContext)

    {console.log('render headerOnly layout')}
    return (
        <div>
            <Header/>
            <div className={styles.content_container}>
                    {isLoading && <Loadding/>}
                <div className='content'>{children}</div>
            </div> 
        </div>
    )
}
export default HeaderOnlyLayout