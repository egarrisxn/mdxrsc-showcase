'use client'
import styles from './socials.module.css'
import Tooltip from '../tooltip'
import { track } from '@vercel/analytics/react'

import Link from '../link'

export function SocialButton({ tooltip, href, icon }) {
  return (
    <Tooltip text={tooltip} direction="top">
      <Link
        href={href}
        className={styles.icon}
        external
        onClick={() =>
          track('clicked social link', {
            type: tooltip.toLowerCase(),
          })
        }
      >
        {icon}
      </Link>
    </Tooltip>
  )
}
