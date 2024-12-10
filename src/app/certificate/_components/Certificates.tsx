'use client'

import React from 'react'
import sty  from './certificates.module.css';
import Image from 'next/image';
export default function Certificates() {
  const certificates = 
  [   {name:'광생물학 안전성 테스트',img:"certificate1.jpeg"}
    , {name:'특허 출원서',img:"certificate2.jpeg"}
    , {name:'안전 인증서',img:"certificate3.jpeg"}
    , {name:'대장균 시험 성적서 (KCL)',img:"certificate4.jpeg"}
    , {name:'대장균 시험 성적서 (KCL)',img:"certificate5.jpeg"}
    , {name:'탈취 시험 성적서 (KCL)',img:"certificate6.jpeg"}
    // , {name:'LED의 동물 각막 영향 실험(동국대)-1',img:"experiment1.png"}
    // , {name:'LED의 동물 각막 영향 (동국대)-2',img:"experiment2.png"}
    // , {name:'LED의 동물 각막 영향 (동국대)-3',img:"experiment3.png"}
  ];

  return (
    <div className={sty.container}>
      <div className={sty.content}>
        <div className={sty.titleContainer}>
          <div className={sty.title}>개발품 성능 인증</div>
          <div className={sty.subtitle}>특허및 성능, 안전성 평가 공인인증 2</div>
        </div>
        <div className={sty.contentContainer}>
            {
             certificates && certificates.map((e,idx)=>
              <div 
              className={sty.contentNode}
              key={'contentNode'+idx+ '$$'}
              >
                  <Image src={'/certificate/' + e.img} width={420} height={600} alt="certificates" />
              </div>
             )
            }
        </div>
      </div>
    </div>
  )
}
