'use client';

import React from 'react'
import styles from './leaflet.module.css';
import SwiperComp from '@/app/_components/SwiperComp';
import InstallExComponent from '@/app/_components/InstallExComponent';

export default function Leaflet() {
  let arr=[
     {img:'/busi/image79.png ' , hoverText:{title:'1번 호버', contents:'1번 설명글'}}
    ,{img:'/using/using1.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/using/using2.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/using/using3.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/using/using4.jpeg', hoverText:{title:'2번 호버', contents:'2번 설명글'}}
    ,{img:'/using/using5.jpeg', hoverText:{title:'3번 호버', contents:'3번 설명글'}}
    ,{img:'/using/using6.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using7.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using8.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using9.jpeg', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using10.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using11.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using12.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using13.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using14.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
    ,{img:'/using/using15.png', hoverText:{title:'4번 호버', contents:'4번 설명글'}}
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        설치사례
      </div>
            <SwiperComp 
              imgs={arr} 
              auto={true}
              useHover={true}
              slidesPerView={1}
            />
    </div>
  )
}
