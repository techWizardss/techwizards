import Image from 'next/image'
import { Lalezar, Poppins } from 'next/font/google'
import styles from '../../styles/homeStyles/industriesWeServe.module.css'

const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function IndustriesWeServe() {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';

  const imageSources = [
    {
      src: 'heart.png',
      name: 'Healthcare'
    },
    {
      src: 'education.png',
      name: 'Education'
    },
    {
      src: 'technology.png',
      name: 'Technology'
    },
    {
      src: 'transportation.png',
      name: 'Transportation'
    },
    {
      src: 'finance.png',
      name: 'Finance'
    },
    {
      src: 'govtservices.png',
      name: 'Govt. Service'
    },
    {
      src: 'agriculture.png',
      name: 'Agriculture'
    },
    {
      src: 'ecommerce.png',
      name: 'Ecommerce'
    }
  ];
  return (
    <div className={styles.container}>
      <span className={`${styles.headerStyles} ${lalezar.className}`}>
        Industries we serve
      </span>
      <span className={`${styles.contentStyles} ${poppins.className}`}>
        At Tech wizards, we serve a wide range of industries. Our team of experts is equipped to handle the unique requirements of each industry and deliver customized solutions.
      </span>
      <div className={styles.imageContainer}>

        {imageSources.map((item, index) => (
          <div className={styles.imageBox}>
            <Image
              src={`${basePath}/${item.src}`}
              alt='.'
              width={95}
              height={109}
            />
            <span>
              {item.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}