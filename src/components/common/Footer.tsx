import Image from 'next/image';
import styles from '../../styles/footer.module.css';
import { Lalezar, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

const Footer = () => {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : ''
  const images = [
    'linkedinLogo.png',
    'facebook.png',
    'instagramLogo.png',
    'twitter.png'
  ];

  const FooterSections = [
    {
      heading: 'Services',
      links: [
        'Web Development',
        'App Development',
        'UI/UX Design'
      ]
    },
    {
      heading: 'Quick Links',
      links: [
        'About us',
        'blog',
        'contact us'
      ]
    },
    {
      heading: 'Legal',
      links: [
        'Privacy Policy',
        'Terms & Condition',
        'Refund Policy'
      ]
    }
  ]

  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={`${basePath}/footerAsset.png`}
        alt='.'
        width={1570}
        height={537}
        style={{ zIndex: 0 }}
      />
      <div style={{ position: 'relative', bottom: 500, justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Image
          src={`${basePath}/TechWizardsFoooterLogo.png`}
          alt='TECHWIZARDS'
          width={180}
          height={20}
          style={{ zIndex: 10 }}
        />
        <div>
          {images.map((item, index) => (
            <Image
              src={`${basePath}/${item}`}
              alt='TECHWIZARDS'
              width={22}
              height={22}
              style={{ zIndex: 10, marginTop: 40, padding: 5, }}
            />
          ))}
        </div>
        <div className={styles.borderContainer} />
        <div className={poppins.className} style={{ display: 'flex', flexDirection: 'row', color: '#C7D8E7', fontSize: 28, fontWeight: '600', width: '100%', justifyContent: 'space-evenly', alignItems: 'center',marginTop:20  }}>
          {
            FooterSections.map((item, index) => (
              <div>
                {item.heading}
                {item.links.map((text, index) => (
                  <div style={{ fontSize: 22, lineHeight: 2.5, width: '100%', color: '#9CB1C2' }}>
                    {text}
                  </div>
                ))}
              </div>
            ))
          }
        </div>
        <div className={poppins.className} style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF', marginTop: 50 }}>Copyright @2024 | Techwizards</div>
      </div>
    </div>
  )
}

export default Footer