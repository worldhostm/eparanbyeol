"use client"
import React from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css'; // core Swiper
import 'swiper/css/bundle'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import styles from './swipercomp.module.css';
import Image from 'next/image';

export default function SwiperComp(){
  return (
    <Swiper
      className={styles['swiper-container']}
      // Swiper instances parameters
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image src={'/intro/poultryfarm.jpeg'} width={600} height={600} alt=''/>
      </SwiperSlide>
      <SwiperSlide>        
        <Image src={'/intro/cattleshed.jpeg'} width={600} height={600} alt=''/>
      </SwiperSlide>
      <SwiperSlide>        
        <Image src={'/intro/cattle2.jpeg'} width={600} height={600} alt=''/>
      </SwiperSlide>
      <SwiperSlide>        
        <Image src={'/intro/pigfarm.jpeg'} width={600} height={600} alt=''/>
      </SwiperSlide>
      {/* 추가적인 슬라이드 */}
    </Swiper>
  );
};

