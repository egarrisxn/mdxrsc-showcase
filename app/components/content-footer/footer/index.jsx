import styles from './footer.module.css'
import Link from '../../link'

export default function ContentFooter() {
  return (
    <>
      <hr style={{margin: 0}} />
      <footer className={styles.footer}>
        <p>
          Thank you for time! Follow me{' '}
          <Link external href='https://x.com/eg_xo_'>
            Twitter
          </Link>
        </p>
      </footer>
    </>
  )
}
