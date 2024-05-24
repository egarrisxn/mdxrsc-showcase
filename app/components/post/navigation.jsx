import styles from './navigation.module.css'
import Link from '../link'

export default function Previous({ previous, next }) {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={`/blog/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href={`/blog/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}
