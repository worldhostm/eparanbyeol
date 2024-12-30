import Image from 'next/image'
import React from 'react'

export default function Goal2() {
  return (
    <div style={{position:'relative', width:'100%', height:'800px'}}>
        <Image 
            src={'/goal/prevent.jpg'}
            alt=''
            width={400}
            height={400}
            style={{
                borderRadius:'50%'
                , boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'
                // , filter: 'grayscale(100%)'          
            }}
        />
        <Image 
            src={'/goal/ecofriendly.jpg'} 
            alt=''
            width={400}
            height={400}
            style={{borderRadius:'50%', boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'}}
        />
        <Image 
            src={'/goal/healthy.jpg'} 
            alt=''
            width={400}
            height={400}
            style={{borderRadius:'50%', boxShadow:'0px 14px 18px 0px rgba(0,0,0,0.5'}}
        />
    </div>
  )
}
