import styles from './page.module.css'
import {getProjects} from '../../data/projects'
import {ContentListRSC} from '../../components/content-list'
import TimeOfDay from '../../components/timer'
import Link from '../../components/link'
import Socials from '../../components/socials'
import ProjectList from '../../components/projects'
import {SpotifyNowPlaying} from '../../components/spotify'
import Image from 'next/image'

const PROJECT_COUNT = 4

export default async function HomePage() {
  const projects = await getProjects()
  return (
    <>
      <header>
        <TimeOfDay />
        <p>
          I do web development & design things. Passionate about learning and growing. Constantly
          challenging myself to be out of my comfort zone. Learn more{' '}
          <Link href='/about'>about me</Link>.
        </p>
        <p>Social interests found below:</p>
        <Socials />
        <p>
          Available for work //{' '}
          <Link external href='https://build-that-resume.vercel.app/example-resume'>
            Resume
          </Link>{' '}
        </p>
      </header>
      <section>
        <div style={{position: 'relative'}}>
          <Image
            src='/purplelines.svg'
            alt='Purple Lines'
            width={110}
            height={75}
            style={{position: 'absolute'}}
          />
          <h2>Projects</h2>
        </div>
        <ProjectList showYears={true} projects={projects.slice(0, PROJECT_COUNT)} seeMore={true} />
      </section>
      <section>
        <div className={styles.postnotes}>
          <div style={{position: 'relative'}}>
            <Image
              src='/yellowlines.svg'
              alt='Yellow Lines'
              width={80}
              height={130}
              style={{position: 'absolute'}}
            />
            <h2>Posts/</h2>
          </div>
          <div style={{position: 'relative'}}>
            <Image
              src='/redlines.svg'
              alt='Red Lines'
              width={95}
              height={130}
              style={{position: 'absolute'}}
            />
            <h2>/Notes</h2>
          </div>
        </div>
        <ContentListRSC />
      </section>
      <footer className={styles.footer}>
        <SpotifyNowPlaying />
      </footer>
    </>
  )
}
