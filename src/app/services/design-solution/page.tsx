import Image from 'next/image';
import { Lalezar, Poppins, } from "next/font/google";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["vietnamese"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin-ext"],
});


const page = () => {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  return (
    <div style={{ flex: 1, overflowX: 'hidden',marginTop:80 }}>
      <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
        <div>
          <Image
            src={`${basePath}/customWebsiteMoreInfoRightCurve.png`}
            alt='.'
            width={150}
            height={706}
            style={{ zIndex: 2 }}
          />
        </div>
        <div style={{ width: 651, display: 'flex', flexDirection: 'column', justifyContent: 'center',marginRight:180 }}>
          <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Transforming </div>
          <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400' }}>Enterprises with Expert</div>
          <div className={lalezar.className} style={{ fontSize: 62, color: '#EE4B4C', lineHeight: 1, fontWeight: '400' }}>App Development</div>
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
        </div>
        <div style={{position:'absolute',right:100,top:120,}}>
          <Image
            src={`${basePath}/womenusingLaptop.png`}
            alt='.'
            width={551}
            height={555}
            style={{ zIndex: 2 }}
          />
        </div>
       <div sty>
          <Image
            src={`${basePath}/designCurve.png`}
            alt='.'
            width={501}
            height={706}
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: 1570,marginTop:120 }}>
        <div style={{ marginLeft: 165 }}>
          <div className={lalezar.className} style={{ fontSize: 62, color: '#3D3D58', lineHeight: 1, fontWeight: '400', width: 598 }}>Crafting Visually Striking UI/UX Designs</div>
          <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 20, width: 598 }}>At TechWizard, we understand that your app is more than just a digital presence – it's a powerful tool for driving business growth. That's why we specialize in providing expert app development solutions tailored to meet your specific business needs.</div>
          <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 20, width: 745 }}>Whether you're looking to launch a new mobile app, develop a custom app from scratch, or redesign your existing app, we have the expertise and experience to deliver exceptional results. Our team of Tech Wizards, composed of skilled app developers and designers, will collaborate closely with you to ensure your app meets your exact specifications and exceeds your expectations</div>
          <div className={poppins.className} style={{ color: '#46505B', fontSize: 24, fontWeight: '400', marginTop: 20, width: 1139 }}>In addition to our development services, we offer app optimization and performance enhancements to improve your app's speed, security, and user experience. Don't wait to maximize your digital potential – unleash it with TechWizard's expert app development solutions today.</div>
        </div>
        <div>
          <Image
            src={`${basePath}/designSolutions.png`}
            alt='.'
            width={620}
            height={607}
            style={{ zIndex: 2, position: 'relative', right: 450,bottom:120 }}
          />
        </div>
      </div>
      <div style={{ width: 1570,height:456, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop:250,position:'absolute',zIndex:2 }}>
        <Image
          src={`${basePath}/unlishbackground.png`}
          alt='.'
          width={1570}
          height={456}
          style={{ zIndex: 2 }}
        />
        <div className={lalezar.className} style={{ position: 'relative', fontWeight: '400', fontSize: 62, lineHeight: 1, color: '#ED644669', left: 60, bottom: 420 }}>
          INDIAN WEBSITE DESIGN PROFESSIONAL WEBSITE WEB SERVICE IN INDIA WEBSITE AGENCIES WEBSITE BUSINESS BEST WEBSITE COMPANIES FLYERS DESIGN SERVICES PACKAGING DESIGN BROCHURE
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',zIndex:30,marginTop:420,position:'relative'}}>
        <Image
          src={`${basePath}/howWeWork.png`}
          alt='.'
          width={1254}
          height={596}
        />
      </div>
    </div>
  )
}

export default page;