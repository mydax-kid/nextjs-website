import Head from 'next/head'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import InstaLink from '../components/InstaLink'

const Home = () => {
  return (
    <div className= 'main'>
      <Head>
        <title>Photography Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Capture Photography'  message='I capture moments in nature and keep them alive '/>
      <Slider/>
      <InstaLink/>
    </div>
  )
}

export default Home;