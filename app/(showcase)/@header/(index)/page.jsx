import styles from './home-header.module.css'
import Image from 'next/image'

export default function HomeHeader() {
  return (
    <div className={styles.heading}>
      <Image
        src='/bluecircle.svg'
        alt='Blue Circle'
        width={205}
        height={50}
        style={{position: 'absolute'}}
      />
      <h1 className={styles.h1}>Ethan G.</h1>
    </div>
  )
}
