'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sty from './commu.module.css';
import 'animate.css';
import AnimatedNumber from '@/app/_components/AnimatedNumber';

export default function Commu() {
  return (
    <div className={sty.container}>
      {/* <h1
      className={sty.h1text + ' '+ 'animate__animated animate__bounceOutDown'}
      >
        123213123
      </h1>
      <Swiper
      className={sty.swiperCnt}
        modules={[
          Pagination,
          Navigation,
          // Autoplay
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction:false // 스와이프 후에도 자동재생 유지
        // }}
        // loop={true}
      >
            <SwiperSlide
            className={sty.text}
            >
              1
            </SwiperSlide>
            <SwiperSlide
            className={sty.text}
            >
              2
            </SwiperSlide>
            <SwiperSlide
            className={sty.text}>
              3
            </SwiperSlide>
      </Swiper> */}
      <AnimatedNumber start={0} end={100} duration={5000} />
    </div>
  )
}
