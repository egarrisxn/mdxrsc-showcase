import styles from './mdx-note.module.css'
import Info from '../../components/icons/info'

export function MDXNote({ children, ...props }) {
  return (
    <aside {...props} className={styles.note}>
      <div className={styles.icon}>
        <Info />
      </div>
      <div className={styles.content}>
        <b>Note: </b>
        {children}
      </div>
    </aside>
  )
}
