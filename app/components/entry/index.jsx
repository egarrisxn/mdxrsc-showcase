import styles from './entry.module.css'
import Badge from '../badge'
import Link from '../link'

export const Entry = ({href, title, description, role, years, showYears = true}) => (
  <li className={styles.wrapper}>
    <div className={styles.split}>
      <h4 className={styles.title}>
        <Link href={href} external={true}>
          {title}
        </Link>
      </h4>
      <div className={styles.badges}>
        <Badge className={styles.badge}>{role}</Badge>
        {showYears && (
          <Badge>
            {years[0]} {years[1] ? '-' : ''} {years[1]}
          </Badge>
        )}
      </div>
    </div>
    <div>{description}</div>
  </li>
)
