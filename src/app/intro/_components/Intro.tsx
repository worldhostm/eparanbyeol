import React, { Fragment } from 'react';
import styles from './intro.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import Certificates from '@/app/certificate/_components/Certificates';
import Solution from '@/app/solution/_components/Solution';
import ZeroToNumber from '@/app/_components/ZeroToNumber';

export default function Intro() {
  // let imageSources = [
  //   {name:'/intro/poultryfarm.jpeg'},
  //   {name:'/intro/cattleshed.jpeg'},
  //   {name:'/intro/cattle2.jpeg'},
  //   {name:'/intro/pigfarm.jpeg'}
  // ];        
  let imgs = [
    // {
    //   img: "/product/product1.jpeg"
    // },
    // {
    //   img: "/product/product2.jpeg"
    // },
    // {
    //   img: "/product/product3.jpeg"
    // },
    // {
    //   img: "/product/product4.jpeg"
    // },
    // {
    //   img: "/product/antivariuslight.jpeg"
    // },
    {
      img: "/busi/image79.png"
    },
    {
      img: "/busi/image80.jpeg"
    },
    {
      img: "/busi/image81.jpeg"
    },
    {
      img: "/busi/image83.jpeg"
    },
  ]
  
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
          {/* <SwiperComp 
          imgs={imgs}
          slidesPerView={1}
          width='100vw'
          /> */}
              <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/green_running.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div className={styles.title}>
              우리는 고객의 목표에 맞추어<br/> 최적의 솔루션을 제공합니다.
            </div>
        </div>
        {/* <div className={styles.contentsContainer}> */}
          {/* <div className={styles.content1}>
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
          </div> */}
          {/* <div className={styles.content2}>
            <div className={styles.content2Title}>
              <div>
                Solutions & Services
              </div>
              <div className={styles.content2description}>
                설명을 적어주세요설명을 적어주세요설명을 적어주세요<br/>
                설명을 적어주세요
              </div>
            </div>
            <SwiperComp imgs={imageSources.map(e=>e.img)}/>
          </div> */}
        {/* </div> */}
          {/* <Certificates />
          <Solution />
          <ZeroToNumber /> */}
      </div>
    </Fragment>
  );
}
