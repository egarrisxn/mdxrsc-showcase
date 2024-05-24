import styles from './page.module.css'
import { getProjects } from '../../data/projects'
import { ContentListRSC } from '../../components/content-list'
import Link from '../../components/link'
import Socials from '../../components/socials'
import SubHeader from '../../components/subheader'
import ProjectList from '../../components/projects'
import TimeOfDay from '../../components/timer'

const PROJECT_COUNT = 3

export default async function HomePage() {
  const projects = await getProjects()
  return (
    <>
      <SubHeader />
      <p>But first, check me out here:</p>
      <Socials />
      <h2 style={{ padding: 'var(--gap-quarter) 0' }}>Projects</h2>
      <ProjectList
        showYears={false}
        projects={projects.slice(0, PROJECT_COUNT)}
        seeMore={true}
      />
      <h2 style={{ padding: 'var(--gap-quarter) 0' }}>Posts | Notes</h2>
      <ContentListRSC />
      <footer className={styles.footer}>
        <span>
          <Link href="/about">More about this site.</Link>
        </span>
        <TimeOfDay />
      </footer>
    </>
  )
}
