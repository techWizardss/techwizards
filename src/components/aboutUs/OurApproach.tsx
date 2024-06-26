import Image from 'next/image';
import styles from '../../styles/aboutUsStyles/OurApproach.module.css';
import { Lalezar, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500',
  subsets: ['latin']
})

const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin']
})

export default function OurApproach() {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : ''
  const imageUrls = [
    'approach1.png',
    'approach2.png',
    'approach3.png'
  ]

  const OurApproachData = [
    {
      step: 'step 1',
      phase: 'Planning',
      description: 'We understand your values and goals and work iteratively with you so that we can know if the product is meeting your expectations at every step.'
    },
    {
      step: 'step 2',
      phase: 'Design & Development',
      description: 'We have a team of experts on board who will work on your project. So, rest assured that your app is in capable hands'
    },
    {
      step: 'STEP 3',
      phase: 'Testing',
      description: 'We spare no effort to detect and correct any bug in a program so that you can securely deploy the product without having to constantly worry.'
    },
    {
      step: 'STEP 4',
      phase: 'Support ',
      description: 'We provide extensive support for the product so that you can be at ease if anything comes up.'
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 140 }}>
      <div className={styles.leftImageContainer}>
        <div className={styles.vectorBackgroundContainer}>
          <Image
            src={`${basePath}/approachBackground.png`}
            width={480}
            height={680}
            alt='.'
          />
          <Image
            src={`${basePath}/approach.png`}
            width={400}
            height={480}
            alt='.'
            style={{ position: 'absolute', top: 180, left: 160 }}
          />
        </div>
        <div style={{ marginLeft: 50, marginTop: 20 }}>
          {imageUrls.map((item, index) => (
            <Image
              src={`${basePath}/${item}`}
              width={150}
              height={188}
              alt='.'
            />
          ))}
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={`${lalezar.className}`} style={{ fontSize: '62px', color: '#22354F', marginLeft: 30 }}>Our Approach</div>
        <div style={{marginTop:60}}>
          {
            OurApproachData.map((item,index) => (
              <div className={styles.contentContainer} >
                <div style={{ width: 500, marginLeft: 20 }} className={styles.contentSubContainer}>
                  <div className={styles.stepsTextStyles}>{item.step}</div>
                  <div className={`${styles.stepsHeaderTextStyles} ${poppins.className}`} style={{ fontWeight: 600 }}>{item.phase}</div>
                  <div className={`${styles.stepsContentTextStyles} ${poppins.className}`}>{item.description}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}