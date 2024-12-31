'use client'

import React from 'react'
import styles from './verify.module.css';
import DynamicChart from '@/app/_components/DynamicChart';
import Image from 'next/image';

export default function VerifyComponents() {
  const trafficData = {
    labels: ['0','2','4','6','8','10'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [2.3,0,0,0,0,0], // 트래픽 소스의 비율
        fill:true,
        borderColor: [
          'rgba(250, 0, 0, 1)',
        ],
        borderWidth:0.5,
        pointRadius: 0,
        backgroundColor:'rgba(250, 0, 0, 0.1)',
      },
      {
        label: 'Traffic Sources',
        data: [2.3, 2.2,2.0,1.9,1.8,1.8], // 트래픽 소스의 비율
        borderColor: [
          'rgba(54, 138, 255, 1)',
        ],
        borderWidth:0.5,
        pointRadius: 0,
        fill:true,
        backgroundColor:'rgba(54, 138, 255, 0.1)',
      },
    ]
  };
  // 황색포도균
  const data2 = {
    labels: ['0','2','4','6','8','10'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [3.5,0,0,0,0,0], // 트래픽 소스의 비율
        borderColor: [
          'rgba(250, 0, 0, 1)',
        ],
        borderWidth:0.5,
        backgroundColor:'rgba(255,180,180,0.1)',
        fill:true,
        pointRadius: 0,
      },
      {
        label: 'Traffic Sources',
        data: [3.5, 3.4, 3.3, 3.3, 3.3, 3.2], // 트래픽 소스의 비율
        borderColor: [
          'rgba(54, 138, 255, 1)',
        ],
        borderWidth:0.5,
        backgroundColor:'rgba(54, 138, 255, 0.1)',
        fill:true,
        pointRadius: 0,
      },
    ]
  };

  // 녹농균
  const data3 = {
    labels: ['0','2','4','6','8','10'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [3.5,0,0,0,0,0], // 트래픽 소스의 비율
        borderColor: [
          'rgba(250, 0, 0, 1)',
        ],
        borderWidth:0.5,
        backgroundColor:'rgba(250, 0, 0, 0.1)',
        fill:true,
        pointRadius: 0,
      },
      {
        label: 'Traffic Sources',
        data: [3.5, 3.4, 3.3, 3.3, 3.3, 3.2], // 트래픽 소스의 비율
        borderColor: [
          'rgba(54, 138, 255, 1)',
        ],
        borderWidth:0.5,
        backgroundColor:'rgba(54, 138, 255, 0.1)',
        fill:true,
        pointRadius: 0,
      },
    ]
  };
  // 황화수소 
  const data4 = {
    labels: ['0','2','4','6','8','10'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [3.5,0,0,0,0,0], // 트래픽 소스의 비율
        borderColor: [
          'rgba(250, 0, 0, 1)',
        ],
        pointRadius: 0,
      },
      {
        label: 'Traffic Sources',
        data: [3.5, 3.4, 3.3, 3.3, 3.3, 3.2], // 트래픽 소스의 비율
        borderColor: [
          'rgba(54, 138, 255, 1)',
        ],
        pointRadius: 0,
      },
    ]
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // 범례 표시
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'X-Axis Label',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Y-Axis Label',
        },
      },
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.pagetitle}>
          제품개발 및 성능 구현 ( Performance Verification )
        </div>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          <Image src={'/CopySimple.svg'} width={36} height={36} alt='이미지'/>
          살균시험
        </div>
        <div style={{
          height:'80px',
          justifyContent:'flex-end',
          whiteSpace:'nowrap',
          display:'flex',
          flexDirection:'column',
          gap:'20px',
          border:'1px solid #eaeaea',
          padding :'4px'
        }}>
          <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'3px'
          }}>
            정제수
            <div style={{width:'100%', border:'3px solid #368AFF'}}/>
          </div>
          <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'3px'
          }}>
            엔비케어
            <div style={{width:'100%', border:'3px solid red'}}/>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div style={{
          width:'380px',
          height:'300px'
        }}>
          <DynamicChart
            chartType='line'
            data={trafficData}
            options={options}
            title={'대장균'}
          />
        </div>
        <div style={{
          width:'380px',
          height:'300px'
        }}>
          <DynamicChart
            chartType='line'
            data={data2}
            options={options}
            title={'황색포도균'}
          />
        </div>
        <div style={{
          width:'380px',
          height:'300px'
        }}>
          <DynamicChart
            chartType='line'
            data={data3}
            options={options}
            title={'녹농균'}
          />
        </div>
      </div>
      {/* 탈취시험 titleContainer*/}
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          <Image src={'/CopySimple.svg'} width={36} height={36} alt='이미지'/>
          탈취시험
        </div>
      </div>
      <div className={styles.contentContainer}>
          <div style={{
            width:'270px',
            height:'270px'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'황화수소'}
            />
          </div>
          <div style={{
            width:'270px',
            height:'270px'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'메틸메르캅탄'}
            />
          </div>
          <div style={{
            width:'270px',
            height:'270px'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'암모니아'}
            />
          </div>
          <div style={{
            width:'270px',
            height:'270px'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'트리메탈아민'}
            />
          </div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          <Image src={'/CopySimple.svg'} width={36} height={36} alt='이미지'/>
          바이러스 불활성화 시험
        </div>
      </div>
      <div className={styles.contentContainer}>
          <div style={{
            width:'550px',
            height:'300px'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'조류 인플루엔자(AI)'}
            />
          </div>
          <div style={{
            width:'550px',
            height:'auto'
          }}>
            <DynamicChart
              chartType='line'
              data={trafficData}
              options={options}
              title={'캘리시바이러스 (고양이, FCV)'}
            />
          </div>
      </div>
    </div>
  )
}
