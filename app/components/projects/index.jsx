import styles from './projects.module.css'
import Link from '../link'
import { Entry } from '../entry'

export default function ProjectList({
  projects = [],
  seeMore = false,
  showYears = true,
}) {
  projects.sort((a, b) => parseInt(b.years[0]) - parseInt(a.years[0]))

  return (
    <ul className={styles.container}>
      {projects.map((e) => {
        return (
          <Entry
            showYears={showYears}
            years={e.years}
            key={e.title}
            href={e.href || ''}
            title={e.title}
            description={e.description}
            role={e.role}
            stars={e.stars}
          />
        )
      })}
      {seeMore && (
        <li>
          See more projects <Link href="/projects"> here</Link>.
        </li>
      )}
    </ul>
  )
}
