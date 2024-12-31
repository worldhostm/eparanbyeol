'use client'

import Image from 'next/image';
import React from 'react';
import styles from './goal2.module.css';

export default function Goal2() {
  return (
    <div 
        style={{position:'relative', width:'1200px', height:'800px', display:'flex'}}
        className={styles.container}
    >
        <div className={styles.contentDiv}>
            <div className={styles.imgText}>예방</div>
            <Image 
                src={'/goal/prevent.jpg'}
                alt=''
                width= {300}
                height={300}
                style={{
                    borderRadius:'50%'
                    , boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'
                    // , filter: 'grayscale(100%)'          
                }}
            />
        </div>
        <div className={styles.contentDiv}>
            <div className={styles.imgText}>친환경</div>
            <Image 
                src={'/goal/ecofriendly.jpg'}
                alt=''
                width= {300}
                height={300}
                style={{borderRadius:'50%', boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'}}
            />
        </div>
        <div className={styles.contentDiv}>
            <div className={styles.imgText}>건강</div>
            <Image 
                src={'/goal/healthy.jpg'} 
                alt=''
                width= {300}
                height={300}
                style={{borderRadius:'50%', boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'}}
            />
        </div>
        <div className={styles.compText}>
            <div style={{fontSize:'58px'}}>Company</div>
            <div style={{color:'#044BFF',fontSize:'51px'}}>OVERVIEW</div>
            <div style={{
                marginTop:'48px',
                wordBreak:'break-all'
            }}>
                파란별TEC는 친 환경적,  건강한 솔루션을 제공합니다.<br/>
                백신이나 항생제의 한계에 이른 현실에서의 선택
            </div>
        </div>
    </div>
  )
}
