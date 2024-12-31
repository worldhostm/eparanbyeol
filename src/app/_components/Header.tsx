'use client'

import React, { Fragment, useContext } from 'react'
import Link from 'next/link'
import styles from './header.module.css';
import { usePathname } from 'next/navigation';

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
  ,
  // {
  //   "url": "/inquiry",
  //   "menuName": "1대1 문의"
  // }
]
export default function Header() {
  const path = usePathname();
  return (
    path !== '/' &&
    <Fragment>
        <div className={styles.containerTop}>
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
            </div>
          </div>
        </div>
    </Fragment>
  )
}
