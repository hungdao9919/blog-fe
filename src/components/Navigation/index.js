import { Link } from "react-router-dom";
import styles from './Navigation.module.scss'
import Button from "../Button";
import { useContext } from "react"; 
import { GlobalContext } from "../../context/GlobalContext";
function Navigation(){
    const {admin} = useContext(GlobalContext) 
    return <div className={styles.container}>
        <Button primary underline className={styles.nav_item} to={'/'}>Home</Button>
        <Button primary underline className={styles.nav_item} to={'/posts'}>View Posts</Button> 
       {admin && <Button primary underline className={styles.nav_item} to={'/editor'}>Admin page</Button>}

   
 
    </div>
}
export default Navigation;