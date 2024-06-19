import React, { Fragment } from 'react';
import styles from './intro.module.css';

export default function Intro() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
              {/* <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/coverr-rays-of-the-sun-shining-through-a-leaf-3991-1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            <div className={styles.title}>
              우리는 고객의 목표에 맞추어 최적의 솔루션을 제공합니다.
            </div>
        </div>
        <div className={styles.contentsContainer}>
          <div className={styles.contents}></div>
        </div>
      </div>
    </Fragment>
  );
}
