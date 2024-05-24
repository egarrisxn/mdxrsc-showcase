import styles from './footer.module.css'
import Link from '../../link'

export default function ContentFooter() {
  return (
    <>
      <hr style={{margin: 0}} />
      <footer className={styles.footer}>
        <p>
          Thank you! Follow me{' '}
          <Link external href='https://x.com/eg_xo_'>
            on Twitter
          </Link>
        </p>
      </footer>
    </>
  )
}
