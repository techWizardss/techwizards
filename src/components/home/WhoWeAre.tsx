"use client";
import Image from 'next/image';
import styles from '../../styles/homeStyles/whoWeAre.module.css';
import { Lalezar, Poppins } from 'next/font/google';


const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"]
})

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function WhoWeAre() {

  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';

  const imageSources = [
    'imageOne.png',
    'image2.png',
    'image3.png',
    'image4.png'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.vectorElement}>
        <Image
          src={`${basePath}/Vector1.png`} // Your vector PNG path
          alt='Vector Background'
          layout="fill"
          quality={100}
          style={{opacity:0.35,top:800,position:'absolute',left:10}}
        />
      </div>
      <span className={`${styles.headerStyles} ${lalezar.className}`}>
        Who we are
      </span>
      <span className={`${styles.contentStyles} ${poppins.className}`}>
        we are dedicated to delivering exceptional digital experiences that foster business growth. Our approach is client-centric, ensuring personalized service from concept through completion.
      </span>
      <div className={styles.imageContainer}>

        {imageSources.map((src, index) => (
          <div className={styles.imageBox}>
            <Image
              src={`${basePath}/${src}`}
              alt='.'
              width={233}
              height={159}
            />
          </div>
        ))}
      </div>
    </div>
  )
}