import React from 'react'
import sty from './principle.module.css';

export default function Principle() {
  return (
    <div className={sty.container}>
      Principle
      <div className={sty.arrow}></div>
      <div className={sty.arrow}></div>
      <div className={sty.arrow}></div>
    </div>
  )
}
