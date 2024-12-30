'use client'

import React from 'react'
import style from './product.module.css';
import Image from 'next/image';
interface Props{
    data : {
        title:string,
        descript?:string,
        desArr : {gubun:string, value:string}[],
        imgurl : string,
    }
}
export default function Product({data}:Props) {
  return (
    <section className={style.container}>
        <div className={style.topContainer}>
            <div className={style.topinner}>
                <Image src={data.imgurl} alt="" width={500} height={400}/>
            </div>
            <div className={style.topinner}>
                <div className={style.pdtname}>
                    {
                        data.title
                    }
                    {/* 인체에 무해한 가시광선 살균등 */}
                    <div className={style.explain}>
                        {data.descript ??'기본값'}
                    </div>
                </div>
            </div>
        </div>
        <div className={style.midContainer}>
            {
                data.desArr && data.desArr.map(e=>
                    <div className={style.gubunbox}>
                        <div className={style.innergubun}>
                            <div className={style.gubun}>
                                <span style={{
                                    width:'5px',height:'5px', background:'green'
                                }}></span>
                                {e.gubun}
                            </div>
                            <div className={style.descript}>
                                {e.value??"없음"}
                            </div>
                        </div>
                        <div style={{borderRight:'1px solid'}}>
                            
                        </div>
                    </div>
                )
            }
        </div>
        <div className={style.botContainer}>
        {/* botContainer */}
        </div>
    </section>
  )
}
