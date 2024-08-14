'use client'
import React from 'react'
import sty from './business.module.css';
import Image from 'next/image';

const imgArr = [
  {
    title:'낙농축산농가',
    descript:'24시간 365일 친환경 상시 방역 시스 템 구동으로 살균 침투력, 유기물 존재하의 효능저하, 정균성 유지, 온도, 햇빛등의 여건에 영향을 받는 일반 소독제 대비, 성능의 탁월성 입증',
    img:'/using/using1.jpeg',
  }
  ,{
    title:'도심, 다중접합시설',
    descript:'24시간 365일 친환경 상시 방역 시스 템 구동으로 살균 침투력, 유기물 존재하의 효능저하, 정균성 유지, 온도, 햇빛등의 여건에 영향을 받는 일반 소독제 대비, 성능의 탁월성 입증',
    img:'/using/using13.png',
  }
  ,{
    title:'철도 이용승객 시설',
    descript:'24시간 365일 친환경 상시 방역 시스 템 구동으로 살균 침투력, 유기물 존재하의 효능저하, 정균성 유지, 온도, 햇빛등의 여건에 영향을 받는 일반 소독제 대비, 성능의 탁월성 입증',
    img:'/using/using7.jpeg',
  }
];
export default function Business() {
  return (
    <div className={sty.container}>
      <div className={sty.content}>
        <div className={sty.titleContainer}>
          <div className={sty.titleText}>Business</div>
          <div className={sty.titleSubtext}>
            설명란 입니다<br/>
            설명란 입니다<br/>
            설명란 입니다
            </div>
        </div>
        <div className={sty.contentContainer}>
          {
            imgArr && imgArr.map((e,idx)=>
              <div 
              className={sty.tileDiv}
              key={'contentNode'+idx+ '$$'}
              >
                <div 
                className={sty.upper}
                style={{
                  backgroundImage: `url(${e.img})`
                }}
                >
                    {/* <Image src={e.img} width={413} height={317} alt=""/> */}
                </div>
                <div className={sty.under}>
                    <div className={sty.subTitle}>
                      <div className={sty.subText1}>
                        <div
                        className={sty.subText1Title}
                        >
                          {e.title}
                        </div>
                        <div className={sty.subText1Content}>
                          {e.descript}
                        </div>
                      </div>
                      <div className={sty.subText2}>
                        버튼자리
                      </div>
                    </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
