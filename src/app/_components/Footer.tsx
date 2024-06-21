import React from 'react'
import styles from './footer.module.css';


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainMenu}>
          회사소개
        </div>
        <div className={styles.menu}>인사말</div>
        <div className={styles.menu}>회사연혁</div>
        <div className={styles.menu}>비전과 가치</div>
        <div className={styles.menu}>사업장안내</div>
        <div className={styles.menu}>브로셔 다운로드</div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainMenu}>
          사업분야
        </div>
        <div>
          <div className={styles.menu}>낙농축산분야</div>
          <div className={styles.menu}>도심교통 승객시설</div>
          <div className={styles.menu}>철도 이용승객 시설</div> 
          <div className={styles.menu}>펫 및 렙타일 kit</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainMenu}>
          연구개발
        </div>
        <div>
          <div className={styles.menu}>제품개발원리</div>
          <div className={styles.menu}>시험성능 인증결과</div>
          <div className={styles.menu}>특허 및 시험성적서</div> 
          <div className={styles.menu}>미래시스템 구축</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainMenu}>
          맞춤형 솔루션
        </div>
        <div>
          <div className={styles.menu}>낙농축산분야</div>
          <div className={styles.menu}>도심교통 승객시설</div>
          <div className={styles.menu}>철도 이용승객 시설</div> 
          <div className={styles.menu}>펫 및 렙타일 kit</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainMenu}>
          사업분야
        </div>
        <div>
          <div className={styles.menu}>낙농축산분야</div>
          <div className={styles.menu}>도심교통 승객시설</div>
          <div className={styles.menu}>철도 이용승객 시설</div> 
          <div className={styles.menu}>펫 및 렙타일 kit</div>
        </div>
      </div>
    </div>
  )
}
