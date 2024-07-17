import React from 'react'
import styles from './goal.module.css';
import Image from 'next/image';
export default function Goal() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flex1}>
          flex1
          <Image src={'/logo.png'} width={300} height={300} alt=""/>
        </div>
        <div className={styles.flex2}>
          <div className={styles['circle1'] }>Solution-Based Approach</div>
          <div className={styles['circle2']}>Best of Performance Processes</div>
          <div className={styles['circle3']}>Best12</div>
          <div className={styles['circle4']}>Best12</div>
        </div>
      </div>
    </div>
  )
}
