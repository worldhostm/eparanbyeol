'use client'
import React from 'react'
import sty from './greet.module.css';
import Image from 'next/image';
export default function Greet() {
  return (
    <div className={sty.container}>
      {/* <div className={sty.contentHeader}>
      </div> */}
      <div className={sty.contentContainer}>
        <div className={sty.flex2}>
          <div className={sty.textContainer}>
            <p>
              안녕하십니까?
            </p>
            <p className={sty.greetText}>
            (주)파란별TEC 홈페이지를 방문해 주셔서 감사드립니다.
            </p>
            <br/>
            <p style={{
              fontSize:'20px'
            }}>
            시간이 흐를수록 우리사회의 평범한 상호작용은 사라질 것이고, 항생제와 약의 남용으로 인해 곰팡이나 박테리아등의 병원 오염균의 항균기능이 부족해진 결과, 모든 생명체의 면역체계는 더욱 약해졌으며, 일반 대중은 환경적 폐해로 인해 근육은 후퇴하고 회복 탄성은 더디어만 가고 있습니다.
            </p>
            <br/>
            <p style={{
              fontSize:'20px'
            }}>
            아울러 레저나 운동등의 접합시설에서의 야외 생활과 반려 애완동물들과의 공동생활은 증가 일로에 있으며 거리와 시차가 없는 불특정 다수와의 공동체 커뮤니티에서의 과밀화 접촉은 일상이 된지 오래입니다. 
            </p>
            <br/>
            <p style={{
              fontSize:'20px'
            }}>
            현대인의 이와 같은 불가측성의 각종 병원균등의 오염원에 상시 노출된 환경에서 전염과 감염, 방역에 대처하는 개인은 물론, 사회적 장치로서의 위생과 보건, 건강, 안전을 위한 환경개선에 보다 더 능동적이고 적극적인 예방, 회피, 억제 선제적 시스템이 필요하다 할 것입니다. 
            </p>
            <br/>
            <p style={{
              fontSize:'20px'
            }}>
            당사는 이러한 질병 유발 병원균과 오염원을 제거하는 친환경 무공해 반영구적 상시 방역을 통한 체감하는 위생관리 시스템으로 귀사의 업무환경을 쾌적하게 제공할 것입니다. 
            </p>
            <br/>
          </div>
        </div>
        <div
        className={sty.flex1}
        >
          <Image src={'/logo.png'} width={300} height={200} alt=""/>
        </div>  
      </div>
    </div>
  )
}
