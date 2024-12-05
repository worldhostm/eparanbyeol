'use client';

import React from 'react'
import styles from './leaflet.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import DynamicChart from '@/app/_components/DynamicChart';

export default function Leaflet() {
  let arr=[
     {img:'/busi/image79.png' , hoverText:{title:'1번 호버', contents:'1번 설명글'}}
    ,{img:'/busi/image80.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/busi/image81.jpeg', hoverText:{title:'3번 호버', contents:'3번 설명글'}}
    ,{img:'/busi/image83.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
  ];
  const trafficData = {
    labels: ['0hr', '3hr', '24hr', '48hr'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [0, 15.3, 69.2, 99.9], // 트래픽 소스의 비율
        // backgroundColor: [
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(255, 205, 86, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        // ],
        borderColor: [
          'rgba(1, 0, 255, 1)',
        ],
        borderWidth: 3,
        options : {
          scales: {
            x: {
              type: 'category', // 카테고리 스케일
            },
            y: {
              type: 'linear', // linear 스케일
              beginAtZero: true,
            },
          },
        },
      },
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'category', // 카테고리 스케일
      },
      y: {
        type: 'linear', // linear 스케일
        beginAtZero: true,
      },
    },
    layout:{
      backgroundColor:'rgba(255 ,255 ,255 ,0)'
    }
  }
  

  return (
    <div className={styles.container}>
       {/* <DynamicChart 
        chartType='line'
        data={trafficData}
        options={options}
      /> */}
      <div className={styles.content}>
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
