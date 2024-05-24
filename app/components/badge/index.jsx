import styles from './badge.module.css'

export default function Badge({ children, className, width, ...props }) {
  return (
    <div
      className={`${styles.badge} ${className ? className : ''}`}
      style={{ width }}
      {...props}
    >
      {children}
    </div>
  )
}
