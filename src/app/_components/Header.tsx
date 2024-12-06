'use client'

import React, { Fragment, useContext } from 'react'
import Link from 'next/link'
import styles from './header.module.css';

export const menuArr = [
  {
    "url": "/intro",
    "menuName": "회사소개"
  },
  {
    "url": "/greet",
    "menuName": "인사말"
  },
  {
    "url": "/certificate",
    "menuName": "인증서"
  },
  {
    "url": "/benefit",
    "menuName": "제품의 원리"
  },
  {
    "url": "/leaflet",
    "menuName": "사업분야"
  },
  {
    "url": "/goal",
    "menuName": "지향목표"
  },
  {
    "url": "/apply",
    "menuName": "적용 분야"
  },
  {
    "url": "/verify",
    "menuName": "성능 입증"
  }
]
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
            {
              menuArr.map((e,idx)=>
                <Link 
              href={e.url}
              key={e.menuName + 'kkkk' + idx}
              >{e.menuName}</Link>
              )
            }
            {/* <Link href={'/greet'}>인사말</Link>
            <Link href={'/solution'}>맞춤형솔루션</Link>
            <Link href={'/commu'}>커뮤니티</Link>
            <Link href={'/certificate'}>인증서</Link>
            <Link href={'/benefit'}>제품의 원리</Link>
            <Link href={'/leaflet'}>사업분야</Link>
            <Link href={'/goal'}>지향목표</Link> */}
            {/* <Link href={'/inquiry'}>1대1 문의</Link>  */}
            {/* <Link href={'/apply'}>적용 분야</Link>  */}
          </div>
        </div>
    </Fragment>
  )
}
