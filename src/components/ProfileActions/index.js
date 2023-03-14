 
import styles from './ProfileActions.module.scss'
import Button from "../Button"; 
import { Link } from 'react-router-dom'; 
function ProfileActions(){ 
    const handleLogout = ()=>{
        console.log("ga")
    }
    return <div className={styles.container}>
        {/* logged */}
        <Button to={'/editor'} rounded small secondary>Create post</Button>

        <Button to={'/login'} rounded small secondary>Log in</Button>
       <div className={styles.profile_image}>
       <Link to={'/profile'} >
            <img src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/279669034_2065666936948299_2111923611944732615_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VJ4P4XsnNq8AX-f34ol&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBAICHvsaSvYox7anEw6K9YuCLzt51HL0xCpq-opHT8YA&oe=6414EA5B'/>
        </Link>
        <div className={styles.menu_container}>
        <ul>
            <li><Link to={'/profile'}>Profile page</Link></li>
            <li onClick={handleLogout}>Log out</li>
        </ul>
        </div>
       </div>
         
        
   
 
    </div>
}
export default ProfileActions;