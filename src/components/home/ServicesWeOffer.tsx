'use client'
import Image from 'next/image';
import style from '../../styles/homeStyles/serviesWeOffer.module.css';
import { Lalezar, Poppins } from 'next/font/google'
import { useState } from 'react';

const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})


export default function ServicesWeOffer() {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : ''
  const [cards, setCards] = useState([
    {
      header: 'Web Development',
      content: [
        'Blog Website',
        'eCommerce Website',
        'Customized Website',
        'Website Redesign'
      ]
    },
    {
      header: 'App Development',
      content: [
        'Desktop Application',
        'Web Application',
        'Mobile Application',
        'Application Maintenance'
      ]
    },
    {
      header: 'UI/UX Design',
      content: [
        'Graphic Design',
        'Website Design',
        'UI/UX Design',
        'Social Media Design',
      ]
    },
  ])

  const handleCardClick = (index:number) => {
    const newsCards = [...cards];
    const temp = newsCards[1];
    newsCards[1] = newsCards[index]
    newsCards[index] = temp;
    setCards(newsCards)
  }

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={`${basePath}/world.png`}
          alt='.'
          width={1714}
          height={611}
          className={style.imageStyles}
        />
        <div className={` ${style.headerStyles} ${lalezar.className}`}>
          Service we offer
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30 }}>
          <div
            className={style.cardContainer}
            onClick={() => handleCardClick(0)}
          >
            <div style={{ marginBottom: 25 }}>
              <span className={`${style.cardHeaderTextStyles} ${poppins.className}`}>{cards[0].header}</span>
            </div>
            <div className={style.cardContentContainer}>
              {cards[0].content.map((item, index) => (
                <span className={`${style.cardContentTextStyles} ${poppins.className}`}>&#x2022; {item}</span>
              ))}
            </div>
            <div style={{ marginTop: 35 }}>
              <span className={`${style.cardfooterTextStyles} ${poppins.className}`}>learn more <span>&#8594;</span></span>
            </div>
          </div>
          {/* Active container starts here  */}
          <div className={style.activeCardContainer}>
            <div style={{ marginBottom: 25 }}>
              <span className={`${style.activeCardHeaderTextStyles} ${poppins.className}`}>{cards[1].header}</span>
            </div>
            <div className={style.activeCardContentContainer}>
              {cards[1].content.map((item, index) => (
                <span className={`${style.activeCardContentTextStyles} ${poppins.className}`}>&#x2022;  {item}</span>
              ))}
            </div>
            <div style={{ marginTop: 35 }}>
              <span className={`${style.activeCardfooterTextStyles} ${poppins.className}`}>learn more <span>&#8594;</span></span>
            </div>
          </div>
          {/* Active container ends here */}
          <div
            className={style.cardContainer}
            onClick={() => handleCardClick(2)}
          >
            <div style={{ marginBottom: 25 }}>
              <span className={`${style.cardHeaderTextStyles} ${poppins.className}`}>{cards[2].header}</span>
            </div>
            <div className={style.cardContentContainer}>
              {cards[2].content.map((item, index) => (
                <span className={`${style.cardContentTextStyles} ${poppins.className}`}>&#x2022;  {item}</span>
              ))}
            </div>
            <div style={{ marginTop: 35 }}>
              <span className={`${style.cardfooterTextStyles} ${poppins.className}`}>learn more <span>&#8594;</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}