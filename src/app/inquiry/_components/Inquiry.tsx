'use client'
import React, { useEffect } from 'react'

export default function Inquiry() {
  useEffect(() => {
    const testFetch =async()=>{
      const res = await fetch('http://localhost:9090/api/inquiry', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'  // Content-Type을 application/json으로 설정
        },
        body:JSON.stringify({
          userId: "64f12ab46eac21e1d4f12345", 
          title: "서비스 관련 문의",
          message: "서비스 이용 중 발생한 문제에 대해 문의드립니다.",
          response: "문의해주셔서 감사합니다. 해당 문제를 해결하기 위해 조치를 취하겠습니다.",
          status: "answered",
        })
      });
      console.info(res);
      testFetch();
    }
    return () => {}
  }, [])
  
  return (
    <div
    style={{
      width:1000,
      height:'50vh',
    }}
    >Inquiry</div>
  )
}
