// components/AboutUs.js

import Image from 'next/image';
import styles from '../../styles/componentStyles/aboutUsStyles/introduction.module.css';
import { Lalezar,Poppins } from 'next/font/google'

const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin']
})

const poppins=Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={'/rightSvg.png'}
          height={706}
          width={601}
          objectFit='contain'
          objectPosition='center'
        />
        <div className={`${styles.content} ${lalezar.className}`}>
          <p className={styles.introHeader} >
            custom
            <span className={styles.introHeaderSpan}> web app development </span>
            company
          </p>
          <p className={styles.introContent}>
            As a dynamic startup offering comprehensive digital
            solutions. Our goal is to be your one-stop destination
            for all your digital needs!
          </p>
          <div className={`${styles.exploreBtnContainer} ${poppins.className}`}>
          <button className={styles.exploreServiceBtn}>Explore our service</button>
          </div>
        </div>
      </div>
      <div className={styles.rightImagesContainer}>
        <Image
          src={'/leftSvg.png'}
          width={721}
          height={710}
          objectFit='contain'
          objectPosition='center'
        />
        <div className={styles.bottomImageContainer}>
          <Image
            src={'/services.png'}
            width={780}
            height={603}
            objectFit='contain'
            objectPosition='center'
          />
        </div>
      </div>
    </div>
  );
}
