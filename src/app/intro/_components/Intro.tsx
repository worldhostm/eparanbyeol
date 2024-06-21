import React, { Fragment } from 'react';
import styles from './intro.module.css';
import SwiperComp from '@/app/_components/SwiperComp';

export default function Intro() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
              <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/coverr-rays-of-the-sun-shining-through-a-leaf-3991-1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div className={styles.title}>
              우리는 고객의 목표에 맞추어 최적의 솔루션을 제공합니다.
            </div>
        </div>
        <div className={styles.contentsContainer}>
          <div className={styles.content1}>
            <div className={styles.category}>
              <div className={styles.maincategory}>
               사업분야
              </div>
              <div className={styles.undercategory}>
                1.낙농축산분야
              </div>
              <div className={styles.undercategory}>
                2.도심교통 승객시설
              </div>
              <div className={styles.undercategory}>
                3.철도 이용승객 시설
              </div>
              <div className={styles.undercategory}>
                4.펫 및 렙타일 kit
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <SwiperComp />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
