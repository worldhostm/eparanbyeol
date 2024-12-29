'use client';

import React from 'react'
import styles from './leaflet.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import InstallExComponent from '@/app/_components/InstallExComponent';

export default function Leaflet() {
  let arr=[
     {img:'/busi/image79.png' , hoverText:{title:'1번 호버', contents:'1번 설명글'}}
    ,{img:'/busi/image80.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/busi/image81.jpeg', hoverText:{title:'3번 호버', contents:'3번 설명글'}}
    ,{img:'/busi/image83.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 
        <div className={styles.flex1}>
            <div className={styles.innerflex2}>
              <ul className={styles.buzfield}>
              <span>사업분야</span>
              <br/>
              <br/>
                <li>낙농축산분야 </li>
                <li>
                  도심교통 승객시설
                </li>
                <li>
                 경로복지커뮤니티
                  </li>
                <li>
                 철도 이용승객 시설
                </li>
                <li>
                 펫 및 렙타일 Kit
                </li>
              </ul>
            </div>
        </div> */}
        <div className={styles.flex2}>
            <div className={styles.inner2flex2}>
            <SwiperComp 
              imgs={arr} 
              auto={true}
              useHover={true}
            />
            </div>
        </div>

      </div>
      <InstallExComponent />
    </div>
  )
}
