import styles from './navigation.module.css'
import Link from '../link'

export default function Navigation({previous, next}) {
  return (
    <nav className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={`./${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href={`./${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </nav>
  )
}
