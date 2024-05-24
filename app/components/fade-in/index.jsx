// https://www.joshwcomeau.com/snippets/react-components/fade-in/
import styles from './fade.module.css'

export default function FadeIn({duration = 300, delay = 0, children, className}) {
  return (
    <div
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
      className={`${className} ${styles.fadeIn}`}
    >
      {children}
    </div>
  )
}
