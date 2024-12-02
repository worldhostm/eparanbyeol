import React from 'react'
import styles from './leaflet.module.css';
import SwiperComp from '@/app/_components/SwiperComp';

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
        <div className={styles.flex1}>
            <div className={styles.innerflex1}>
              <div className={styles.pageText}>
                <div className={styles.headtext1}>
                  파란별 TEC컴퍼니
                </div>
                <div className={styles.headtext2}>
                우리는 고객의 목표에 맞추어 <br/>
                최적의 솔루션을 제공합니다.
                </div>
              </div>
            </div>
            <div className={styles.innerflex2}>
              <ul className={styles.buzfield}>
              <h2>사업분야</h2><br/>
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
        </div>
        <div className={styles.flex2}>
            <div className={styles.inner2flex1}>
              <div className={styles.inner2flex1_title}>
                사업분야
              </div>
              <div className={styles.inner2flex1_contents}>
              설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.
              설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.
              </div>
            </div>
            <div className={styles.inner2flex2}>
            <SwiperComp 
            imgs={arr} 
            auto={true}
            useHover={true}
            />
            </div>
        </div>
      </div>
    </div>
  )
}
