'use client'

import { usePathname } from 'next/navigation';
import React from 'react';

export default function SubHeader() {
    const path =usePathname();

  return (
    path === 'intro' || '/'
    ?
    <></>
    :
    <div style={{
        position:'relative',
        width:'1200px',
        height:'auto',
        minHeight:'300px',
        backgroundColor:'black',
        // backgroundImage:`url(/logo.png)`,
        backgroundRepeat:'unset',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        fontSize:'48px',
      }}>
        메뉴명
        {/* <Image src={'/logo.png'} /> */}
      </div>
  )
}
