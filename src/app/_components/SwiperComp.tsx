"use client"
import React, { useState } from 'react';
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
  imgs : {img:string, hoverText:{title:string,contents:string}}[];
  auto ?: boolean
  useHover ?:boolean 
}
interface FarmInfo {
  name_ko: string;
  name_eng: string;
  description_ko: string;
  description_eng: string;
  url: string;
  img: string;
}


export default function SwiperComp({imgs,auto, useHover}:Props){
  const [isHover, setisHover] = useState< boolean | null >(null);
  const [isHoverIdx, setisHoverIdx] = useState<number | null>(null);

  return (
    <Swiper
      className={styles['swiper-container']}
      modules={[
        Navigation
        , Autoplay
      ]}
      spaceBetween={1}
      slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction:false // 스와이프 후에도 자동재생 유지
      }}
      loop={true}
    >
      {imgs&&
        imgs.map((e,index)=>
          <SwiperSlide 
          key={'slide$$' + index}
          onMouseEnter={()=>{
            setisHover(true);
            setisHoverIdx(index);
          }}
          onMouseLeave={()=>{
            setisHover(false);
            setisHoverIdx(null);
          }}
          >
            <Image src={e.img} width={300} height={350} objectFit='true' alt=''/>
            {
              useHover && isHover && isHoverIdx === index? 
              <div className={styles.overimage}>
                <div>
                  {e.hoverText.title}
                </div>
                <div>
                  {e.hoverText.contents}
                </div>
              </div>
              :<></>
            }
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

