'use client'

import Image from 'next/image'
import React from 'react'

export default function InstallExComponent() {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
    }}>
        <Image src={'/install/installEx1.jpg'} width={1200} height={800} alt=""/>
        <Image src={'/install/installEx2.jpg'} width={1200} height={800} alt=""/>
    </div>
  )
}
