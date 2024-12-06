'use client';

import React from 'react';
import styles from './goal.module.css';
import Image from 'next/image';
import DynamicChart from '@/app/_components/DynamicChart';
export default function Goal() {
  const arr = [
    {imgSrc : '/FirstAid.svg',titleText:'친환경', contentText:'텍스트1'},
    {imgSrc : '/FirstAidKit.svg',titleText:'보건', contentText:'텍스트2'},
    {imgSrc : '/Pill.svg',titleText:'건강', contentText:'텍스트3'},
    {imgSrc : '/Syringe.svg',titleText:'예방', contentText:'텍스트4'},
  ];

  const trafficData = {
    labels: ['0hr', '3hr', '24hr', '48hr'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [0,15.3, 69.2, 99.9], // 트래픽 소스의 비율
        borderColor: [
          'rgba(1, 0, 255, 1)',
        ],
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
      <div className={styles.upperContainer}>기업의 지향목표</div>
      <div className={styles.contentContainer}>
      {
        arr && arr.map((e,idx)=>
        <div 
        key={'titleText' + idx}
        className={styles.contents}
        >
          <div>
            <Image src={e.imgSrc} width={227} height={227} alt=""/>
          </div>
          <div className={styles.titleText}>
          {e.titleText}
          </div>
          <div className={styles.contentText}>
            {e.contentText}
          </div>
        </div>
        )
      }
      </div>
      <div style={{
        width:'1200px',
        height:'900px',
      }}>
        <div className={styles.graphUpper}>
          <div className={styles.topper}>개발품 성능 입증 : LUKA 405(시험인증)</div>
          <div className={styles.under} >
            LED 살균<span style={{color:'red'}}>燈</span> 퍼플이란 ? <br/>
            <div className={styles.descript}>
              박테리아 내, ‘포피린’과 반응(Porphyrin excitation)
              -{'>'} Reactive Oxygen species (활성산소) 생성으로
              cell 파괴
              -{'>'} 포피린 : 박테리아에 존재하는 
              405nm 반응물질
            </div>

          </div>
        </div>
        <DynamicChart 
          chartType='line'
          data={trafficData}
          options={options}
        />
      </div>

    </div>
  )
}
