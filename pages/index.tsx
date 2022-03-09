import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar/Navbar'
import WhatIsClueLess from './components/WhatIsClueless/WhatIsClueLess'
import UltimateResourceHub from './components/UltimateResourceHub/UltimateResourceHub'
import Footer from './components/Footer'
import TeamMembersHome from './components/TeamMembersHome/TeamMembersHome'
import DonateHome from './components/DonateHome/DonateHome'
import HomeMain from './components/Home/HomeMain'
import ActiveChallengesHome from './components/Home/ActiveChallengesHome'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>ClueLess</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <HomeMain />
      <WhatIsClueLess />
      <ActiveChallengesHome />
      <UltimateResourceHub />
      <TeamMembersHome />
      <DonateHome />
      <Footer />

    </div>
  )
}

export default Home
