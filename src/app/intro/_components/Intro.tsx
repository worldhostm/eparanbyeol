import React, { Fragment } from 'react';
import styles from './intro.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import Certificates from '@/app/certificate/_components/Certificates';
import Solution from '@/app/solution/_components/Solution';
import ZeroToNumber from '@/app/_components/ZeroToNumber';
import Goal from '@/app/goal/_components/Goal';
import Benefit from '@/app/benefit/_components/Benefit';
import Leaflet from '@/app/leaflet/_components/Leaflet';
import VerifyComponents from '@/app/verify/_components/VerifyComponents';

export default function Intro() {
  
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
              <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/green_running.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div className={styles.title}>
              우리는 고객의 목표에 맞추어<br/> 최적의 솔루션을 제공합니다.
            </div>
        </div>
      </div>
      <Goal />
      <Benefit/>
      <Leaflet/>
      <Certificates />
      <VerifyComponents />
    </Fragment>
  );
}
