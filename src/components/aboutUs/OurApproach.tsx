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
  // const env = 'Production';
  // const basePath = env === 'Production' ? '/techwizards' : ''
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
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
    <div style={{ marginTop: 140,overflow:'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className={styles.leftImageContainer}>
          <div className={styles.vectorBackgroundContainer}>
            <Image
              src={`${basePath}/approachBackground.png`}
              alt='.'
              height={680}
              width={480}
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
                alt='.'
                height={188}
                width={150}
              />
            ))}
          </div>
        </div>
        <div className={styles.rightSideContainer}>
          <div className={`${lalezar.className}`} style={{ fontSize: '62px', color: '#22354F', marginLeft: 30 }}>Our Approach</div>
          <div style={{ marginTop: 60 }}>
            {
              OurApproachData.map((item, index) => (
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
      <div>
        <div style={{ position: 'relative', width: '100%', justifyContent: 'flex-end', alignContent: 'center', display: 'flex', zIndex: 1, bottom: 180 }}>
          <Image
            src={`${basePath}/leftsvg.png`}
            alt='.'
            height={706}
            width={601}
            style={{ zIndex: 0 }}
          />
        </div>
        <div style={{ marginTop: '-540px', zIndex: 10000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className={`${lalezar.className}`} style={{ fontSize: '62px', color: '#22354F', textAlign: 'center' }}>
            Enhance Your Brand,
            <span style={{ color: '#ED6446', marginLeft: 10 }}>with Creative Mastery</span>
          </div>
          <div className={`${poppins.className}`} style={{ width: '70%', fontSize: 22, textAlign: 'center', color: '#656569', }}>
            Reach out to Techwizards today to explore your project vision and discover how our creative expertise can bring your ideas to life.
          </div>
          <div className={`${poppins.className}`} style={{ width: '178px', height: '44px', backgroundColor: '#EF826A', borderRadius: '8px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16, color:'#FFFFFF',marginTop:50 }} >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}