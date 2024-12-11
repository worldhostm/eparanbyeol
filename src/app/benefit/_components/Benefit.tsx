import React, { Fragment } from 'react'
import sty from './benefit.module.css';
import Image from 'next/image';
import Certificates from '@/app/certificate/_components/Certificates';

export default function Benefit() {
  return (
      <div className={sty.container}>
        <div className={sty.header}>
          1등급 원유 생산, 농가 소득증대, 생산성 향상, 환경개선, 스마트 축산업 구현
        </div>
        <div
        style={{
          position:'relative',
          display:'flex',
          flexDirection:'column',
          gap:'80px',
        }}
        >
          <div className={sty['center-circle']}>LED<br/>축사살균기<br/>설치 기대효과</div>
            <div className={sty.row}>
              <div className={sty.box}>
                <h3>경제적 효과</h3>
                <ul>
                  <li>질병으로 인한 가축 폐사 예방</li>
                  <li>무공해 살균으로 양질의 축산물 생산</li>
                  <li>원유 등급 향상 (1등급), 소득향상</li>
                </ul>
              </div>
              <div className={sty.box}>
                <h3>환경적 효과</h3>
                <ul>
                  <li>약제 방역으로 인한 2차 환경오염 방지</li>
                  <li>약취 저감 효과</li>
                  <li>친환경적으로 약취 민원 대응</li>
                </ul>
              </div>
            </div>
            <div className={sty.row}>
              <div className={sty.box}>
                <h3>시설운용 효과</h3>
                <ul>
                  <li>친환경적이며 반영구적 (최대 5년 이상)</li>
                  <li>상시적으로 운용할 수 있어 방제 용이</li>
                  <li>젖소 관리 편리성으로 일손 부족 해소</li>
                </ul>
              </div>
              <div className={sty.box}>
                <h3>미래 지향적 효과</h3>
                <ul>
                  <li>스마트 축산 시스템과 연계 가능</li>
                  <li>글로벌 축산환경 대응</li>
                  <li>미래 소비자 신뢰 확보</li>
                </ul>
              </div>
            </div>
        </div>

      </div>
  )
}
