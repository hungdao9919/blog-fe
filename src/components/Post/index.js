import styles from './Post.module.scss'

function Post({title,postcontent,datecreated}){
    return <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.short_desc}>{postcontent}</p>
        <div className={styles.details}>
            <p className={styles.date_created}>{datecreated}</p>
            <p className={styles.author}>Tac gia Hung</p>
        </div>
    </div>
}
export default Post;