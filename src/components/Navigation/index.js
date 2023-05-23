 
import styles from './Navigation.module.scss'
import Button from "../Button"; 
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


function Navigation(){ 
    
    const globalContext = useContext(GlobalContext) 
    const isAdmin = globalContext.isAdmin 
    const isLogged = globalContext.isLogged 
    return <div className={styles.container}>
        {console.log('navigation render')} 
        {isLogged && <div  className={styles.myposts_btn}><Button primary underline className={styles.nav_item} to={'/myposts'}>My Posts</Button> </div>} 
    </div>
}  
export default Navigation;