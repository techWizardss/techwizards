import styles from "../../styles/aboutUsStyles/content.module.css";
import { Lalezar, Poppins } from "next/font/google";
import Image from "next/image";

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
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ marginTop: 80, display: 'flex' }}>
        <Image
          src={`${basePath}/rightsvg.png`}
          alt='.'
          width={601}
          height={706}
          style={{ zIndex: 2 }}
        />
        <div style={{ position: 'relative', top: 120, right: 380, zIndex: 10 }}>
          <div className={poppins.className} style={{ fontSize: 30, color: '#1E1E1EB5', fontWeight: 600 }}>About us</div>
          <div className={poppins.className} style={{
            fontSize: 36, fontWeight: 700, color: '#22354F',
            width: 1350
          }}>
            <span style={{ color: '#ED6446', gap: 2 }}>
              From Visionaries to Innovators:&nbsp;
            </span>
            Uncover Our Story of Transforming Challenges into Digital Masterpieces
          </div>
          <div className={poppins.className} style={{
            fontSize: 26, fontWeight: 400, color: '#46505B', marginTop: 10,
            width: 1190
          }}>
            We are a team of diverse skillsets, providing organizations valuable wide-variety of services by our creative working approach. Choosing us means partnering with a team that is as invested in your success as you are. We go beyond standard solutions to create customized strategies that are specifically designed to maximize your business outcomes. With us, you're not just getting a service provider; you're gaining a partner who will walk with you every step of the way.
          </div>
          <div style={{ padding: 50 }}>
            <Image
              src={`${basePath}/aboutUs.png`}
              alt='.'
              width={1100}
              height={538}
              style={{ zIndex: 3 }}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            <Image
              src={`${basePath}/aboutUsSection.png`}
              alt='.'
              width={1200}
              height={504}
              style={{ zIndex: 3 }}
            />
          </div>
            <div style={{ marginTop: 50, width: 1300, height: 305, backgroundColor: '#FE8264', borderRadius: 20,marginLeft:-70,textAlign:'center',marginBottom:100 }}>
            <div className={poppins.className} style={{ fontSize: 40, fontWeight: '600', color:'#FFFFFF',lineHeight:3 }}>Ready to start your next project or need more information?</div>
            <div className={poppins.className} style={{ fontSize: 24, fontWeight: '400', color: '#FFFFFF', lineHeight: 2 }}>Reach out to us today, and let's discuss how we can help you achieve your goals.</div>
            <div className={poppins.className} style={{ fontSize: 32, fontWeight: '500', color: '#FFFFFF', lineHeight: 4 }}>Contact Us</div>
            </div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 300, zIndex: 1 }}>
        <Image
          src={`${basePath}/leftSvg.png`}
          alt='.'
          width={601}
          height={706}
        />
      </div>
    </div>
  );
}
export default Content;