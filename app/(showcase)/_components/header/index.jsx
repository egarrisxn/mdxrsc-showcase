import styles from './header.module.css'
import ThemeSwitcher from '../../../components/theme-switcher'

export default function Header({ children }) {
  return (
    <div className={styles.nav}>
      <div className={styles.header}>{children}</div>
      <div>
        <ThemeSwitcher hideTooltip />
      </div>
    </div>
  )
}
