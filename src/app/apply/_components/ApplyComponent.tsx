'use client'

import React from 'react';
import Image from 'next/image';
import styles from './apply.module.css';
import InstallExComponent from '@/app/_components/InstallExComponent';

export default function ApplyComponent() {
    const images = [
        {src:'/apply/cattle.webp',descript:'축사 및 양돈, 양계장'},
        {src:'/apply/distribution.webp',descript:'물류집하장'},
        {src:'/apply/dogcenter.png',descript:'애니멀(Pet) Kit'},
        {src:'/apply/recycle.webp',descript:'공동주택분리수거장'},
        {src:'/apply/rest.webp',descript:'대중교통대합실'},
        {src:'/apply/welfare.webp', descript:'경로복지회관'},
    ];

  return (
    <div
    className={styles.container}
        style={{
            position: 'relative',
            width: '1200px',
            height: '100vh',
            margin: 'auto',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            // background:'white'
            }}>
            {/* <div style={{
                width:'1200px',
                height:'80px',
                background:'black',
                color:'white',
                fontSize:'36px',
                fontFamily:'Pretendard',
                display:'flex',
                alignItems:'center',
                justifyContent:'baseline',
                padding:'0px 40px',
            }}>
                적용분야 
            </div> 
            */}
            <div
                style={{
                    position: 'relative',
                    width: '1200px',
                    height: '100vh',
                    borderRadius: '50%',
                }}
                className={styles.underContainer}
            >
        {images && images.map((_, index) => (
            <div
            key={_.src.substring(6,10) + index}
            className={styles.imageContainer}
            style={{
                display:'flex',
                flexDirection:'column',
                position: 'absolute',
                gap:'20px',
                fontSize:'24px',
                borderRadius: '50%',
                top: `${450 - 25 + 400 * Math.sin((index * 360) / 6 / 180 * Math.PI)}px`,
                left:`${470 - 25 + 400 * Math.cos((index * 360) / 6 / 180 * Math.PI)}px`,
                // animationDelay:`${index/3}s`
            }}>
                <Image
                src={_.src} // 이미지 URL
                width={300}
                height={300}
                alt={`circle-img-${index}`}
                style={{
                    borderRadius:'50%',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 2.2)',
                }}
                />
            <div style={{
                width:'300px',
                height:'auto',
                display:'flex',
                justifyContent:'center',
                fontFamily:'Pretendard'
            }}>{_.descript}</div>
            </div>
        ))}
        </div>
    </div>

  )
}
