'use client'

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useConstandContext } from './ConstantProvider';
import { menuArr } from './Header';

export default function SubHeader() {
  const pathName = usePathname();  
  const {menuPath} = useConstandContext();
  const [name, setname] = useState<string>();

  
  useEffect(() => {
    const matchedMenu = menuArr.find(e=>e.url === pathName)?.menuName;
    setname(matchedMenu);
  }, [pathName]);

  return (
    // 소개랑 루트 일때 안보여줌
    (pathName !== '/intro'  && pathName !== '/' )&&
    <div style={{
        position:'relative',
        width:'1200px',
        height:'auto',
        minHeight:'300px',
        // backgroundColor:'black',
        // background: 'linear-gradient(to right, #090F20, #044BFF)',
        // backgroundSize:'contain',
        backgroundRepeat:'unset',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        fontSize:'48px',
        background:'black'
      }}>
      <div
      style={{
        width:'500px',
        height:'300px',
        backgroundImage:`url(/submenubg.png)`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
      >
        <div
        style={{
          width:'100%',
          display:'flex',
          justifyContent:'baseline',
          alignItems:'center'
        }}
        >
        {
          name
        }
        </div>
      </div>
     </div>
  )
}
