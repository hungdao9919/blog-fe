import styles from './PostDetail.module.scss'

function PostDetail({id,title,postcontent,datecreated,datemodify, username}){
    return <div className={styles.post_container}>
        {console.log('Render PostDetail')}
        <p className={styles.post_id}>{id}</p>
        <p className={styles.post_title}>{title}</p>
        <p className={styles.post_postcontent}>{postcontent}</p>
        <p className={styles.post_datecreated}>{datecreated}</p>
        <p className={styles.post_datemodify}>{datemodify}</p> 
        <p className={styles.post_username}>{username}</p>
        </div>
}
export default PostDetail;