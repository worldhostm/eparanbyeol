import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <Fragment>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            {/* <div className={styles.imgDiv}></div> */}
            <div className={styles.logoText}>
              <Link href={'/'}>파란별TEC</Link>
              {/* <p>paranbyeol</p> */}
            </div>
          </div>
          <div className={styles.contentContainer}>
            <Link href={'/intro'}>회사소개</Link>
            <Link href={'/greet'}>인사말</Link>
            {/* 
            <Link href={'/benefit'}>제품의 원리</Link>
            <Link href={'/solution'}>맞춤형솔루션</Link>
            <Link href={'/commu'}>커뮤니티</Link>
            <Link href={'/certificate'}>인증서</Link>
            <Link href={'/inquiry'}>1대1 문의</Link> */}
            <Link href={'/leaflet'}>사업분야</Link>
            <Link href={'/goal'}>지향목표</Link>
          </div>
        </div>
    </Fragment>
  )
}
