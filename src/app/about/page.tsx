import IndustriesWeServe from '@/components/aboutUs/IndustriesWeServe'
import Introduction from '@/components/aboutUs/Introduction'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div>
      <Introduction />
      <WhoWeAre />
      <IndustriesWeServe />
    </div>
  )
}

export default AboutUs
