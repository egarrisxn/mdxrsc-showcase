import styles from './layout-outline.module.css'
import React from 'react'
import { clsx } from 'clsx'

const RENDER = false

export default function Outline({ name, children, type }) {
  if (!RENDER) return <>{children}</>

  return (
    <div className={clsx(styles['layout-outline'], styles[type])}>
      <div className={styles['label-container']}>
        <div className={styles.label}>{name}</div>
      </div>
      {children}
    </div>
  )
}
