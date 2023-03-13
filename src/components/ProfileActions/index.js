 
import styles from './ProfileActions.module.scss'
import Button from "../Button"; 
import { Link } from 'react-router-dom'; 
function ProfileActions(){ 
    return <div className={styles.container}>
        {/* logged */}
        <Button to={'/editor'} rounded small secondary>Create post</Button>

        <Button to={'/login'} rounded small secondary>Log in</Button>
        <Link to={'/profile'} className={styles.profile_image}>
            <img src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/279669034_2065666936948299_2111923611944732615_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VJ4P4XsnNq8AX-f34ol&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBAICHvsaSvYox7anEw6K9YuCLzt51HL0xCpq-opHT8YA&oe=6414EA5B'/>
        </Link>
         
        
   
 
    </div>
}
export default ProfileActions;