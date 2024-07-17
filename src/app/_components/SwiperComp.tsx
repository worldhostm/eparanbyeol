"use client"
import React from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css'; // core Swiper
import 'swiper/css/bundle'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import styles from './swipercomp.module.css';
import Image from 'next/image';

interface Props {
  imgs : string[]
  auto ?: boolean
}

export default function SwiperComp({imgs,auto}:Props){
  return (
    <Swiper
      className={styles['swiper-container']}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction:false // 스와이프 후에도 자동재생 유지
      }}
      loop={true}
    >
      {imgs&&
        imgs.map((e)=>
          <SwiperSlide>
            <Image src={e} width={600} height={600} alt=''/>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

