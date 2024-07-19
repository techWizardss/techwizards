'use client'
import Image from 'next/image';
import { Lalezar, Poppins } from 'next/font/google';

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});


const CustomWebsitesMoreInfo = () => {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginTop: 80, display: 'flex', }}>
        <Image
          src={`${basePath}/customWebsiteMoreInfoRightCurve.png`}
          alt='.'
          width={150}
          height={706}
          style={{ zIndex: 2 }}
        />
        <div style={{ position: 'relative', top: 60, zIndex: 10, }}>
          <div style={{ display: 'flex', }}>
            <div style={{ width: 553, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 100 }}>
              <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Unleashing Online Potential with Custom <span style={{ color: '#FD529D' }}>Websites</span> </div>
              <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 10 }}>At TechWizard, we help you unlock the full potential of your business with our expert web development services. With our comprehensive skills and experience, you can bring your online vision to reality.</div>
              <div style={{ display: 'flex' }}>
                <div
                  className={poppins.className}
                  style={{
                    width: 180,
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
                    borderRadius: 4,
                    cursor: 'pointer'
                  }}>
                  schedule a call
                </div>
                <div
                  className={poppins.className}
                  style={{
                    width: 180,
                    height: 40,
                    // backgroundColor: '#ED6446',
                    color: '#FD529D',
                    textTransform: 'uppercase',
                    fontSize: 14,
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 25,
                    marginLeft: 10,
                    cursor: 'pointer'
                  }}>
                  view portfolio &#8594;
                </div>
              </div>

              <div style={{ display: 'flex', marginTop: 250, justifyContent: 'space-around', marginBottom: 80, width: 1200 }}>
                <div style={{ width: 601, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                  <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Unleash Your Digital Potential with  Expert Web Solutions </div>
                  <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 25 }}>At TechWizard, we understand that your website is more than just a digital presence – it's a powerful tool for driving business growth. That's why we specialize in providing expert web solutions tailored to meet your specific business needs.</div>
                  <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 25 }}>Whether you're looking to launch a new blog, develop a custom website from scratch, or redesign your existing site, we have the expertise and experience to deliver exceptional results. Our team of Tech Wizards, composed of skilled web developers and designers, will collaborate closely with you to ensure your website meets your exact specifications and exceeds your expectations.</div>
                  <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 25 }}>In addition to our development services, we offer website optimization and performance enhancements to improve your site's speed, security, and search engine rankings. Don't wait to maximize your digital potential – unleash it with TechWizard's expert web solutions today.</div>
                </div>
                <div>
                  <Image
                    src={`${basePath}/twoGuysWithLaptop.png`}
                    alt='.'
                    width={621}
                    height={607}
                  />
                </div>
              </div>
              <div>
                <Image
                  src={`${basePath}/howWeWork.png`}
                  alt='.'
                  width={1254}
                  height={596}
                />
              </div>
            </div>
            <div>
              <Image
                src={`${basePath}/htmlServices.png`}
                alt='.'
                width={699}
                height={576}
              />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 0, top: 100, zIndex: 1 }}>
          <Image
            src={`${basePath}/rightellipse.png`}
            alt='.'
            width={350}
            height={706}
            style={{ opacity: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomWebsitesMoreInfo;
