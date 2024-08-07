import React from 'react'
import styles from './footer.module.css';


const menus = [
  {
    mainMenu: '회사소개',
    subMenus: [
      '인사말',
      '회사연혁',
      '비전과 가치',
      '사업장안내',
      '브로셔 다운로드',
    ],
  },
  {
    mainMenu: '사업분야',
    subMenus: [
      '낙농축산분야',
      '도심교통 승객시설',
      '철도 이용승객 시설',
      '펫 및 렙타일 kit',
    ],
  },
  {
    mainMenu: '연구개발',
    subMenus: [
      '제품개발원리',
      '시험성능 인증결과',
      '특허 및 시험성적서',
      '미래시스템 구축',
    ],
  },
  {
    mainMenu: '맞춤형 솔루션',
    subMenus: [
      '낙농축산분야',
      '도심교통 승객시설',
      '철도 이용승객 시설',
      '펫 및 렙타일 kit',
    ],
  },
  {
    mainMenu: '사업분야',
    subMenus: [
      '낙농축산분야',
      '도심교통 승객시설',
      '철도 이용승객 시설',
      '펫 및 렙타일 kit',
    ],
  },
];
export default function Footer() {
  return (
    <div className={styles.container}>
    {menus.map((menu, index) => (
      <div 
      className={styles.content} 
      key={index}
      style={{
        backgroundColor : 
          index === 0
        ? '#D5D5D5'
        : index === 1
        ? '#BDBDBD'
        : index === 2
        ? '#AFE1FF'
        : index === 3
        ? '#BCE55C'
        : index === 4
        ? '#F29661'
        : '#FAFAFA'
      }}
      >
        <div 
          className={styles.mainMenu}
        >
          {menu.mainMenu}
        </div>
        {menu.subMenus.map((subMenu, subIndex) => (
          <div className={styles.menu} key={subIndex}>
            {subMenu}
          </div>
        ))}
      </div>
    ))
    }
    <div>
      <div></div>
    </div>
  </div>
);
}
