'use client'

import React, { useEffect, useState } from 'react'
import styles from './inquiry.module.css';
import Image from 'next/image';

type FormData = {
  name: string;
  age: number | "";
  email: string;
};

export default function Inquiry() {
    // const testFetch =async()=>{
    //   const res = await fetch('http://localhost:9090/api/inquiry', {
    //     method:'POST',
    //     headers:{
    //       'Content-Type': 'application/json'  // Content-Type을 application/json으로 설정
    //     },
    //     body:JSON.stringify({
    //       userId: "64f12ab46eac21e1d4f12345", 
    //       title: "서비스 관련 문의",
    //       message: "서비스 이용 중 발생한 문제에 대해 문의드립니다.",
    //       response: "문의해주셔서 감사합니다. 해당 문제를 해결하기 위해 조치를 취하겠습니다.",
    //       status: "answered",
    //     })
    //   });
    // }
    // testFetch();
    const [formData, setFormData] = useState({
      title: '',
      companyName: '',
      location: '',
      contact: '',
      message: '',
      file: null as File | null,
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFormData((prevData) => ({
        ...prevData,
        file,
      }));
    };
  
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      // const res = await fetch('http://localhost:9090/api/inquiry', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json' // JSON 데이터 전송을 위해 Content-Type 헤더 설정
      //   },
      //   credentials: 'include', // 또는 'same-origin' (유효한 옵션은 'include', 'same-origin', 'omit')
      //   body: JSON.stringify(formData)
      // });

      const res2 = await fetch('http://localhost:9090/api/v1/aligo/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // JSON 데이터 전송을 위해 Content-Type 헤더 설정
        },
        credentials: 'include', // 또는 'same-origin' (유효한 옵션은 'include', 'same-origin', 'omit')
        body: JSON.stringify({
          sender: '01076180186',      // 발신자 전화번호 (최대 16bytes)
          receiver: '01040939680',   // 수신자 전화번호 (최대 1천명)
          msg: '메세지 테스트입니다',            // 메시지 내용 (1~2,000Byte)
          // msg_type: 'SMS',  // 메시지 타입: SMS(단문), LMS(장문), MMS(그림문자)
          // title: '제목 테스트',        // 문자 제목 (LMS, MMS만 허용)
          // destination: '고객명', // %고객명% 치환용 입력
          // rdate: new Date,        // 예약일 (YYYYMMDD)
          // rtime: new Date,        // 예약시간 (HHMM)
          // image: 'string'         // 첨부 이미지 (JPEG, PNG, GIF)
        })
      });
      console.log(formData);
      e.preventDefault();
      // 서버로 폼 데이터를 제출하는 로직을 작성하세요.
    };
  
    return (
      <div className={styles.ct}>
        <div className={styles.titlect}
        >1대1 문의</div>
        <form 
        encType='multipart/form-data'
        onSubmit={handleSubmit}>
          <div className={styles.ipct}>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className={styles.ipct}>
            <label htmlFor="companyName">회사명</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className={styles.ipct}>
            <label htmlFor="location">지역</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
    
          <div className={styles.ipct}>
            <label htmlFor="contact">연락처</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>
    
          <div className={styles.ipct}>
            <label htmlFor="message">내용</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
    
          <div className={styles.ipct}>
            <label htmlFor="file">첨부파일</label>
            <label 
            htmlFor="file"
            className={styles.fileLabel}>
              <Image src="/icon/filesvg.svg" alt="" width={24} height={24}/>
              {
                formData?.file?.name??null
              }
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">제출하기</button>
        </form>
      </div>
    );
  };
