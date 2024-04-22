import Footers from './Footers'
import GetStarted from './GetStarted'
import Hero from './Hero'
import HowItworks from './HowItworks'
import NavHeader from './NavHeader'
import Partners from './Partners'

export default function HomePage() {
  return (
    <>
      <NavHeader />
      <Hero />
      <Partners />
      <HowItworks />
      <GetStarted />
      <Footers />
    </>
  )
}
