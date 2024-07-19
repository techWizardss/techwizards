'use client'
import styles from "../../styles/aboutUsStyles/content.module.css";
import { Lalezar, Poppins, } from "next/font/google";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Content = () => {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  const router = useRouter();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ marginTop: 80, display: 'flex' }}>
        <Image
          src={`${basePath}/leftellipse.png`}
          alt='.'
          width={465}
          height={558}
          style={{ zIndex: 2 }}
        />
        <div style={{ position: 'relative', top: 120, right: 330, zIndex: 10, width: 1184 }}>
          <div className={poppins.className} style={{ fontSize: 30, color: '#1E1E1EB5', fontWeight: 600 }}>Our Services</div>
          <div className={lalezar.className} style={{
            fontSize: 48, fontWeight: 400, color: '#22354F',
            width: 1350, lineHeight: 1, marginTop: 12
          }}>
            Transforming ideas into digital excellence&nbsp;
            <span style={{ color: '#ED6446', }}>
              Your partner in App Development, Web Solutions, and Design
            </span>
          </div>
          <div className={poppins.className} style={{
            fontSize: 26, fontWeight: 400, color: '#534F4F', marginTop: 22,
            width: 1190
          }}>
            At Tech Wizards, we specialize in app and web development, along with innovative design services. Our expert team turns your ideas into seamless digital solutions, ensuring exceptional user experiences and strong brand engagement. Transform your vision into digital excellence with us.
          </div>
          <div style={{ display: 'flex', marginTop: 300, justifyContent: 'space-around' }}>
            <div style={{ width: 553, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Unleashing Online &nbsp; Potential with Custom <span style={{ color: '#FD529D' }}>Websites</span> </div>
              <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 10 }}>At TechWizard, we help you unlock the full potential of your business with our expert web development services. With our comprehensive skills and experience, you can bring your online vision to reality.</div>
              <div
                className={poppins.className}
                onClick={() => router.push('/services/custom-websites')}
                style={{
                  width: 160,
                  height: 40,
                  backgroundColor: '#ED6446',
                  color: 'white',
                  textTransform: 'uppercase',
                  fontSize: 14,
                  fontWeight: '500',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 25,
                  cursor:'pointer'
                }}>
                More info.
              </div>
            </div>
            <div>
              <Image
                src={`${basePath}/htmlServices.png`}
                alt='.'
                width={616}
                height={453}
              />
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: 20, }}>
            <div>
              <Image
                src={`${basePath}/phoneCalander.png`}
                alt='.'
                width={681}
                height={708}
              />
            </div>
            <div style={{ width: 651, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Transforming </div>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Enterprises with Expert</div>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#EE4B4C', lineHeight: 1, fontWeight: '400' }}>App Development</div>
              <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 10 }}>At TechWizard, we help you unlock the full potential of your business with our expert web development services. With our comprehensive skills and experience, you can bring your online vision to reality.</div>
              <div 
                onClick={() => router.push('/services/app-development')}
              className={poppins.className} 
              style={{ width: 160, height: 40, backgroundColor: '#ED6446', color: 'white', textTransform: 'uppercase', fontSize: 14, fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25,cursor:'pointer' }}
              
              >More info.</div>
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: 30, justifyContent: 'space-around', marginBottom: 80 }}>
            <div style={{ width: 601, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Enhance Your Brand with Innovative <span style={{ color: '#20C0C0' }}>creative   Design Solutions </span> </div>
              <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 10 }}>At TechWizard, we help you unlock the full potential of your business with our expert web development services. With our comprehensive skills and experience, you can bring your online vision to reality.</div>
              <div 
              onClick={() => router.push('/services/design-solution')}
              className={poppins.className} 
              style={{ width: 160, height: 40, backgroundColor: '#ED6446', color: 'white', textTransform: 'uppercase', fontSize: 14, fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25,cursor:'pointer' }} 
              >
                More info.
                </div>
            </div>
            <div>
              <Image
                src={`${basePath}/workingWomen.png`}
                alt='.'
                width={591}
                height={595}
              />
            </div>
          </div>

        </div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 180, zIndex: 1 }}>
        <Image
          src={`${basePath}/rightellipse.png`}
          alt='.'
          width={350}
          height={706}
        />
      </div>
      <div style={{ position: 'absolute', right: 0, top: 180, zIndex: 1 }}>
        <Image
          src={`${basePath}/rightellipse.png`}
          alt='.'
          width={350}
          height={706}
        />
      </div>
     
    </div>
  );
}
export default Content;