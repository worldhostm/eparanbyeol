import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <Fragment>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.imgDiv}></div>
            <div className={styles.logoText}>
              <p>파란별TEC</p>
              <p>paranbyeol</p>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <Link href={'/intro'}>회사소개</Link>
            <Link href={'/leaflet'}>사업분야</Link>
            <Link href={'/goal'}>지향목표</Link>
            <Link href={'/solution'}>맞춤형솔루션</Link>
            <Link href={'/commu'}>커뮤니티</Link>
          </div>
        </div>
    </Fragment>
  )
}
