import styles from './socials.module.css'
import {SocialButton} from './social-button'
import {LinkedIn, GitHub, Twitter, Instagram, Music, Mail} from '../icons'

export default function Socials(props) {
  return (
    <div className={styles.socials} {...props}>
      <SocialButton
        href='https://www.linkedin.com/in/ethan-gx'
        icon={<LinkedIn strokeWidth={2} />}
        tooltip='LinkedIn'
      />
      <SocialButton
        href='https://github.com/egarrisxn'
        icon={<GitHub strokeWidth={2} />}
        tooltip='GitHub'
      />
      <SocialButton
        href='https://x.com/eg_xo_'
        icon={<Twitter strokeWidth={2} />}
        tooltip='Twitter'
      />
      <SocialButton
        href='https://instagram.com/eg___xo'
        icon={<Instagram strokeWidth={2} />}
        tooltip='Instagram'
      />
      <SocialButton
        href='https://open.spotify.com/user/egarrisxn'
        icon={<Music strokeWidth={2} />}
        tooltip='Spotify'
      />
      <SocialButton
        href='mailto:egarrisxn@gmail.com'
        icon={<Mail strokeWidth={2} />}
        tooltip='Email'
      />
    </div>
  )
}
