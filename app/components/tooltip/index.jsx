'use client'
import React from 'react'
import styles from './tooltip.module.css'

export default function Tooltip({children, text, direction = 'top', ...otherProps}) {
  return (
    <span className={styles.tooltip} data-label={text} data-direction={direction} {...otherProps}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            'aria-label': text,
          }),
      )}
    </span>
  )
}
