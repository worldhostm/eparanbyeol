'use client'

import React from 'react'
import sty from './zeroToNumber.module.css';
import AnimatedNumber from './AnimatedNumber';

export default function ZeroToNumber() {
  return (
    <div className={sty.container}>
      <div className={sty.contentContainer}>
        <div className={sty.titleContainer}>
          제목 자리
        </div>
       <div className={sty.gridContainer}>
          <div className={sty.tileDiv}>
              <div>
                수치 종류
              </div>
              <div className={sty.aniNum}>
                  <AnimatedNumber 
                  start={0} 
                  end={10000}
                  duration={5000}
                  fontbold={true}
                  color='blue'
                  size={80}
                  />
              </div>
          </div>
          <div className={sty.tileDiv}>
              <div>
                수치 종류
              </div>
              <div className={sty.aniNum}>
                  <AnimatedNumber 
                  start={0} 
                  end={10000}
                  duration={5000}
                  fontbold={true}
                  color='blue'
                  size={80}
                  />
              </div>
          </div>
          <div className={sty.tileDiv}>
              <div>
                수치 종류
              </div>
              <div className={sty.aniNum}>
                  <AnimatedNumber 
                  start={0} 
                  end={10000}
                  duration={5000}
                  fontbold={true}
                  color='blue'
                  size={80}
                  />
              </div>
          </div>
       </div> 
      </div>
    </div>
  )
}
