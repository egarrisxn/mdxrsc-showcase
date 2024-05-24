import styles from './input.module.css'

export default function Input(props) {
  return <input type='text' className={styles.input} {...props} />
}
