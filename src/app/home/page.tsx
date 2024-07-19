import IndustriesWeServe from '@/components/home/IndustriesWeServe'
import Introduction from '@/components/home/Introduction'
import OurApproach from '@/components/home/OurApproach'
import ServicesWeOffer from '@/components/home/ServicesWeOffer'
import WhoWeAre from '@/components/home/WhoWeAre'
import WhyUs from '@/components/home/WhyUs'
import Image from 'next/image'

const Home = () => {
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

export default Home
