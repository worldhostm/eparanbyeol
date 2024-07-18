import React from 'react'
import sty from './solution.module.css'
import Image from 'next/image'

export default function Solution() {
  return (
    <div className={sty.container}>
      <div className={sty.titleContainer}>
        <div>1</div>
        <div>2</div>
      </div>
      <div className={sty.cntContainer}>
        <div className={sty.cntflex1}>
          <div className={sty.imgcontent}>
            <Image src={'/solution/image57.png'} width={150} height={150} alt=''/>
          </div>
          <div className={sty.circle + " " + sty.redGradient}></div>
          <div className={sty.circle + " " + sty.brownGradient}></div>
          <div className={sty.circle + " " + sty.blueGradient}></div>
          <div className={sty.circle + " " + sty.mintGradient}></div>
          <div className={sty.circle + " " + sty.limeGradient}></div>
        </div>
        <div className={sty.cntflex2}></div>
      </div>
    </div>
  )
}
