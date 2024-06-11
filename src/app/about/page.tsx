import IndustriesWeServe from '@/components/aboutUs/IndustriesWeServe'
import Introduction from '@/components/aboutUs/Introduction'
import OurApproach from '@/components/aboutUs/OurApproach'
import ServicesWeOffer from '@/components/aboutUs/ServicesWeOffer'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import WhyUs from '@/components/aboutUs/WhyUs'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Introduction />
      <WhoWeAre />
      <IndustriesWeServe />
      <ServicesWeOffer />
      <WhyUs />
      <OurApproach />
    </div>
  )
}

export default AboutUs
