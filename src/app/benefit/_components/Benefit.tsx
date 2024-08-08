import React from 'react'
import sty from './benefit.module.css';
import Image from 'next/image';

export default function Benefit() {
  return (
    <div className={sty.container}>
      <div className={sty.flex1}>
        <div className={sty.flex1innerContainer1}>
        <div className={sty.titleText}>
          <div className={sty.imgDiv}>
            <Image src={'/effectSample.png'} width={50} height={50} alt=""/>
          </div>
          <div>
            경제적효과
          </div>
        </div>
        감염병 사안별 주기, 비정기적 화학제 소독활동이 불필요, 한번설치로 반영구적.
        <br/>
        병원체 감염으로 인한 치명적 질병예방 및 악취등 <br/>
        환경 유해요인 제거로 엄무 효율성 제고. 
        <br/>
        살균 침투력, 유기물 존재하의 효능저하, 지속성, 정균성유지, 온도<br/>
        햇빛등 여건에 영향을 받는 일반 소독제에 대비 살균효과 탁월.
        <br/>
        </div>
        <div className={sty.flex1innerContainer2}>
          <div className={sty.titleText}>
            <div className={sty.imgDiv}>
              <Image src={'/effectSample.png'} width={50} height={50} alt=""/>
            </div>
            <div>
              경제적효과
            </div>
          </div>
          불특정 다수, 개방형 시설환경에서의 심리적 안전성 부여로 활동반경 확대<br/>
          대중교통등 공동접합공간에서의 방역, 오염 예방의 선제적 상시대응<br/>
          밀폐, 반밀폐, 개방형 공동체공간에서의 악취, 불쾌지수 호소등의 <br/>
          민원회피 및 잠재적 블랙컨슈머 원천차단<br/>
          항체, 면역력 저하등  취약계층의 보건, 위생환경 증진으로  위생환경 고도화.
        </div>
      </div>
      <div className={sty.flex2}>
        <div className={sty.circle}>
          <div className={sty['top-arrow-with-neck']}></div>
            <div className={sty.centerImgDiv}>
              <Image src={'/logo.png'} width={150} height={100} alt="logo" />
            </div>
          <div className={sty['right-arrow-with-neck']}></div>
          <div className={sty['bottom-arrow-with-neck']}></div>
          <div className={sty['left-arrow-with-neck']}></div>
        </div>
      </div>
      <div className={sty.flex3}>
        <div className={sty.flex3innerContainer1}>
          <div className={sty.titleText}>
            <div className={sty.imgDiv}>
              <Image src={'/effectSample.png'} width={50} height={50} alt=""/>
            </div>
            <div>
              경제적효과
            </div>
          </div>
          <div className={sty.descText}>
            개방형 환경에서의 외부 감염원의 병원균 차단효과.
            <br/>외부여건에 영향을 받는 분말, 살포등  일반 소독제에 비해
            <br/>독성, 자극성, 부식성등의 유해 독성에 무해.
            <br/>항균, 제균,대기정화, 탈황, 방오, 방염등의 실내외 공기질 개선
            <br/>반영구적 24시간, 365일 상시 오염원 제거.
          </div>
        </div>
        <div className={sty.flex3innerContainer2}>
          <div className={sty.titleText}>
            <div className={sty.imgDiv}>
              <Image src={'/effectSample.png'} width={50} height={50} alt=""/>
            </div>
            <div>
              경제적효과
            </div>
          </div>
          스마트컨트롤시스템 구축으로,
          <br/>-제품 및 건물관리 환경을 디지털로 전환
          <br/>-기후, 환경, 화재, 재난, 안전등 실시간 컨트롤시스템
          <br/>-24시간  관리, 감시,체크, 모니터링 상시 대응 
        </div>
      </div>
    </div>
  )
}
