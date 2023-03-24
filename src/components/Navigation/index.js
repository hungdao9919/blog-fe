 
import styles from './Navigation.module.scss'
import Button from "../Button"; 
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


function Navigation(){ 
    console.log('navigation render')
    const globalContext = useContext(GlobalContext) 
    const isAdmin = globalContext.isAdmin 
    return <div className={styles.container}>
        <Button primary underline className={styles.nav_item} to={'/'}>Home</Button>
        <Button primary underline className={styles.nav_item} to={'/posts'}>View Posts</Button> 
       {isAdmin && <Button primary underline className={styles.nav_item} to={'/editor'}>Admin page</Button>} 
    </div>
}  
export default Navigation;