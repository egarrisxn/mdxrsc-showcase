import styles from './button.module.css'
import {forwardRef} from 'react'
import {Spinner} from '../spinner'
import clsx from 'clsx'

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    {
      children,
      onClick,
      className,
      buttonType = 'secondary',
      disabled = false,
      iconRight,
      iconLeft,
      height = 40,
      width,
      padding = 10,
      margin,
      loading,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.button, className, {
          [styles.primary]: buttonType === 'primary',
          [styles.secondary]: buttonType === 'secondary',
        })}
        disabled={disabled || loading}
        onClick={onClick}
        style={{height, width, margin, padding, ...style}}
        {...props}
      >
        {children && iconLeft && (
          <span className={clsx(styles.icon, styles.iconLeft)}>{iconLeft}</span>
        )}
        {!loading &&
          (children ? children : <span className={styles.icon}>{iconLeft || iconRight}</span>)}
        {loading && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </span>
        )}
        {children && iconRight && (
          <span className={clsx(styles.icon, styles.iconRight)}>{iconRight}</span>
        )}
      </button>
    )
  },
)

export default Button
