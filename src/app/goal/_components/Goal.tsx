import React from 'react'
import styles from './goal.module.css';
import Image from 'next/image';
export default function Goal() {
  const arr = [
    {imgSrc : '/FirstAid.svg',titleText:'친환경', contentText:'텍스트1'},
    {imgSrc : '/FirstAidKit.svg',titleText:'보건', contentText:'텍스트2'},
    {imgSrc : '/Pill.svg',titleText:'건강', contentText:'텍스트3'},
    {imgSrc : '/Syringe.svg',titleText:'예방', contentText:'텍스트4'},
  ];
  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>기업의 지향목표</div>
      <div className={styles.contentContainer}>
      {
        arr && arr.map((e,idx)=>
        <div 
        key={'titleText' + idx}
        className={styles.contents}
        >
          <div>
            <Image src={e.imgSrc} width={227} height={227} alt=""/>
          </div>
          <div className={styles.titleText}>
          {e.titleText}
          </div>
          <div className={styles.contentText}>
            {e.contentText}
          </div>
        </div>
        )
      }
      </div>
    </div>
  )
}
