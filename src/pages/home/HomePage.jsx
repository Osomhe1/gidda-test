import Footers from './Footers'
import GetStarted from './GetStarted'
import HeaderNav from './HeaderNav'
import Hero from './Hero'
import HowItworks from './HowItworks'
import Partners from './Partners'
import PrivateSector from './PrivateSector'
import PublicSector from './PublicSector'
import PurcheasePower from './PurcheasePower'
import RemoteWorker from './RemoteWorker'
import WhoWeServe from './WhoWeServe'
import WhyGidda from './WhyGidda'

export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <Hero />
      <Partners />
      <PurcheasePower />
      <WhyGidda />
      <WhoWeServe />
      <RemoteWorker />
      <PrivateSector />
      <PublicSector />
      <HowItworks />
      <GetStarted />
      <Footers />
    </>
  )
}
