'use client'
import Image from 'next/image';
import { Lalezar, Poppins } from 'next/font/google';
import styles from '../../styles/aboutUsStyles/whyUs.module.css';

const lalezar = Lalezar({
  weight: '400',
  subsets: [
    'latin'
  ]
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function WhyUs() {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  const reactangeBackground = '/';
  const data = [
    {
      backgroundUrl:'/rectangle.png',
      imageUrl: '/qualityService.png',
      header: 'Quality Service',
      content: 'We believe in delivering quality products and services to our customers worldwide. That is what we are best known for'
    },
    {
      backgroundUrl: '/rectangle.png',
      imageUrl: '/talentedProfessional.png',
      header: 'Talented Personnel',
      content: 'We offer instant access to a talented workforce that is better equipped for handling your design and development.'
    },
    {
      backgroundUrl: '/rectangle.png',
      imageUrl: '/quickDelivery.png',
      header: 'Quick Delivery',
      content: `We understand the importance of our client's time. Hence, we take care that our projects meet the set deadline of your needs.`
    },
    {
      backgroundUrl: '/rectangle.png',
      imageUrl: '/transportationServices.png',
      header: 'Transparent Services',
      content: 'To better engage with our customers, we provide a very transparent process that the client can understand and work.'
    },
    {
      backgroundUrl: '/rectangle.png',
      imageUrl: '/fixedPrices.png',
      header: 'Fixed Price',
      content: 'We know the value of hard-earned money. So, we provide a very clear billing system that does not leave you confused and negotiating.'
    },
    {
      backgroundUrl: '/rectangle.png',
      imageUrl: '/ongoingServices.png',
      header: 'Ongoing Support',
      content: 'We are always ready to support and help you with your problems so that you can have an incredibly smooth experience.'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${lalezar.className}`} >
        Why us?
      </div>
      <div className={styles.cardContainer}>

        {/* First Two Items */}
        {data.slice(0, 2).map((item, index) => (
          <div className={`${styles.listContainer} `}>
            <div>
              <Image
                src={`${basePath}${item.backgroundUrl}`}
                alt='.'
                width={154}
                height={166}
                className={styles.backgroundImageStlyes}
              />
              <Image
                src={`${basePath}${item.imageUrl}`}
                alt='.'
                width={150}
                height={120}
                className={styles.imageStlyes}
              />
            </div>
            <Image
              src={`${basePath}${item.backgroundUrl}`}
              alt="."
              width={154}
              height={166}
              style={{position:'absolute',zIndex:0,right:20}}
            />
            <div className={styles.contentContainer} style={{zIndex:100}}>
              <div className={`${styles.headerTextStyles} ${poppins.className}`}>{item.header}</div>
              <div className={`${styles.cardContentTextStyles} ${poppins.className}`}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* middle Two Items */}
      <div className={styles.middleContainer}>
        <div className={styles.middleListContainer}>
          <div>
            <Image
              src={`${basePath}${data[2].backgroundUrl}`}
              alt="."
              width={154}
              height={166}
              className={styles.backgroundImageStyles}
            />
            <Image
              src={`${basePath}${data[2].imageUrl}`}
              alt="."
              width={150}
              height={120}
              className={styles.middleImageStyles}
            />
          </div>
          <Image
            src={`${basePath}${data[2].backgroundUrl}`}
            alt="."
            width={154}
            height={166}
            style={{ position: 'absolute', zIndex: 0, right: 20 }}
          />
          <div className={styles.contentContainer} style={{zIndex:100}}>
            <div className={`${styles.headerTextStyles} ${poppins.className}`}>
              {data[2].header}
            </div>
            <div className={`${styles.cardContentTextStyles} ${poppins.className}`}>
              {data[2].content}
            </div>
          </div>
        </div>

        <span className={styles.middleLogoContainer}>
          <Image
            src={`${basePath}/animatedLogo.png`}
            alt="Logo"
            width={178}
            height={204}
            className={styles.backgroundImageStyles}
          />
        </span>

        <div className={styles.middleListContainer}>
          <div>
            <Image
              src={`${basePath}${data[3].backgroundUrl}`}
              alt="."
              width={154}
              height={166}
              className={styles.backgroundImageStyles}
            />
            <Image
              src={`${basePath}${data[3].imageUrl}`}
              alt="."
              height={120}
              width={150}
              className={styles.middleImageStyles}
            />
          </div>
          <Image
            src={`${basePath}${data[3].backgroundUrl}`}
            alt="."
            height={166}
            width={154}
            style={{ position: 'absolute', zIndex: 0, right: 20 }}
          />
          <div className={styles.contentContainer} style={{zIndex:100}}>
            <div className={`${styles.headerTextStyles} ${poppins.className}`}>
              {data[3].header}
            </div>
            <div className={`${styles.cardContentTextStyles} ${poppins.className}`}>
              {data[3].content}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>

        {/* First Two Items */}
        {data.slice(3, 5).map((item, index) => (
          <div className={`${styles.listContainer} `}>
            <div>
              <Image
                src={`${basePath}${item.backgroundUrl}`}
                alt='.'
                width={154}
                height={166}
                className={styles.backgroundImageStlyes}
              />
              <Image
                src={`${basePath}${item.imageUrl}`}
                alt='.'
                height={120}
                width={150}
                className={styles.imageStlyes}
              />
            </div>
            <Image
              src={`${basePath}${item.backgroundUrl}`}
              alt="."
              height={166}
              width={154}
              style={{ position: 'absolute', zIndex: 0, right: 20 }}
            />
            <div className={styles.contentContainer} style={{zIndex:100}}>
              <div className={`${styles.headerTextStyles} ${poppins.className}`}>{item.header}</div>
              <div className={`${styles.cardContentTextStyles} ${poppins.className}`}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}