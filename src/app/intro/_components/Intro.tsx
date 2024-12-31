'use client'

import React, { Fragment } from 'react';
import styles from './intro.module.css';
import Certificates from '@/app/certificate/_components/Certificates';
import Goal from '@/app/goal/_components/Goal';
import Benefit from '@/app/benefit/_components/Benefit';
import Leaflet from '@/app/leaflet/_components/Leaflet';
import VerifyComponents from '@/app/verify/_components/VerifyComponents';
import Product from '@/app/_components/Product';
import Goal2 from '@/app/_components/Goal2';

export default function Intro() {
  const product1 ={
    title:'LED살균등',
    desArr : [
      { "gubun": "소비전력(W)", "value": "10~15" },
      { "gubun": "입력전압(V)", "value": "220" },
      { "gubun": "컨버터", "value": "맞춤제작" },
      { "gubun": "LED", "value": "가시광 살균 LED" },
      { "gubun": "총광속(lm)", "value": "" },
      { "gubun": "광효율(lm/w)", "value": "" },
      { "gubun": "연색성(Ra)", "value": "살균" },
      { "gubun": "빔각도(FWHM)", "value": "101°" },
      { "gubun": "방진 방수등급", "value": "IP65" },
      { "gubun": "크기(mm)", "value": "⌀11 X H10" },
      { "gubun": "무게(KG)", "value": "300g" },
      { "gubun": "수명", "value": "약5년(보증2년)" }
    ],
    imgurl:'/product/product3.jpeg',
    descript:'※ 자외선 살균등은 인체에 유해 2년간 품질보증'
  }
  

  const product2 = 
    {
    title:'LED 축사살균기',
    desArr:[
      { "gubun": "소비전력(W)", "value": "100~150" },
      { "gubun": "입력전압(V)", "value": "90~305" },
      { "gubun": "컨버터", "value": "Meanwell" },
      { "gubun": "LED", "value": "LG, PEC, 기타 405n LED" },
      { "gubun": "총광속(lm)", "value": "" },
      { "gubun": "광효율(lm/w)", "value": "" },
      { "gubun": "연색성(Ra)", "value": "살균" },
      { "gubun": "빔각도(FWHM)", "value": "101°" },
      { "gubun": "방진 방수등급", "value": "IP65" },
      { "gubun": "크기(mm)", "value": "⌀370 X H281" },
      { "gubun": "무게(KG)", "value": "5kg" },
      { "gubun": "수명", "value": "약5년(보증2년)" }
    ],
    imgurl:'/product/product1.jpeg',
    descript:'낙농농가에 최적화 되어있는 살균조명 입니다. 살균 작용으로 원유 체세포 현저히 감소!-낙농 농가에서  시험 테스트 확인-'
   };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
          <video autoPlay muted loop className={styles.videoBackground}>
            {/* <source src="/green_running.mp4" type="video/mp4" /> */}
            <source src="/purplecell.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.title}>
            축사 살균 LED No.1 파란별TEC (예시)
            {/* 우리는 고객의 목표에 맞추어<br/> 최적의 솔루션을 제공합니다. */}
          </div>
        </div>
      </div>
      <Goal2 />
      <Benefit/>
      <Leaflet/>
      <Product data={product1}/>
      <Product data={product2}/>
      <VerifyComponents />
      <Certificates />
    </Fragment>
  );
}
