import styles from './socials.module.css'
import { SocialButton } from './social-button'
import { GitHub, Twitter, Mail } from '../icons'

export default function Socials(props) {
  return (
    <div className={styles.socials} {...props}>
      <SocialButton
        href="https://github.com/egarrisxn"
        icon={<GitHub strokeWidth={2} />}
        tooltip="GitHub"
      />
      <SocialButton
        href="https://x.com/eg_xo_"
        icon={<Twitter strokeWidth={2} />}
        tooltip="Twitter"
      />
      <SocialButton
        href="mailto:egarrisxn@gmail.com"
        icon={<Mail strokeWidth={2} />}
        tooltip="Email"
      />
    </div>
  )
}
