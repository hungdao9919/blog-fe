import styles from './Post.module.scss'

function Post({title,postcontent,datecreated,username}){
    return <div className={styles.container}>
        {console.log('Render Post')}
        <p className={styles.title}>{title}</p>
        <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{datecreated}</p>
            <p className={styles.author}>{username}</p>
        </div>
    </div>
}
export default Post;