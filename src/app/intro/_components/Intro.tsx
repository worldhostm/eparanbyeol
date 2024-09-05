import React, { Fragment } from 'react';
import styles from './intro.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import Certificates from '@/app/certificate/_components/Certificates';
import Solution from '@/app/solution/_components/Solution';
import ZeroToNumber from '@/app/_components/ZeroToNumber';

export default function Intro() {
  // let imageSources = [
  //   {name:'/frontend/intro/poultryfarm.jpeg'},
  //   {name:'/frontend/intro/cattleshed.jpeg'},
  //   {name:'/frontend/intro/cattle2.jpeg'},
  //   {name:'/frontend/intro/pigfarm.jpeg'}
  // ];
  let imageSources = [
    {
      name_ko: "닭 농장",
      name_eng: "Poultry Farm",
      description_ko: "최신 기술로 운영되는 현대식 닭 농장입니다.",
      description_eng: "A modern poultry farm operated with the latest technology.",
      url: "/frontend/intro/poultryfarm",
      img: "/frontend/intro/poultryfarm.jpeg"
    },
    {
      name_ko: "소 축사",
      name_eng: "Cattle Shed",
      description_ko: "넓고 청결한 소 축사입니다.",
      description_eng: "A spacious and clean cattle shed.",
      url: "/frontend/intro/cattleshed",
      img: "/frontend/intro/cattleshed.jpeg"
    },
    {
      name_ko: "목장 소",
      name_eng: "Cattle in Pasture",
      description_ko: "목장에서 풀을 뜯고 있는 소들입니다.",
      description_eng: "Cattle grazing in the pasture.",
      url: "/frontend/intro/cattle2",
      img: "/frontend/intro/cattle2.jpeg"
    },
    {
      name_ko: "돼지 농장",
      name_eng: "Pig Farm",
      description_ko: "위생적으로 관리되는 돼지 농장입니다.",
      description_eng: "A hygienically managed pig farm.",
      url: "/frontend/intro/pigfarm",
      img: "/frontend/intro/pigfarm.jpeg"
    }
  ]
  
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.intro}>
              <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/coverr-rays-of-the-sun-shining-through-a-leaf-3991-1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div className={styles.title}>
              우리는 고객의 목표에 맞추어<br/> 최적의 솔루션을 제공합니다.
            </div>
        </div>
        <div className={styles.contentsContainer}>
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
          <div className={styles.content2}>
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
          </div>
        </div>
          <Certificates />
          <Solution />
          <ZeroToNumber />
      </div>
    </Fragment>
  );
}
