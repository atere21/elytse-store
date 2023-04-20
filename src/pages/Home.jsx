import React from 'react'
import Navbar from "../components/Navbar";
import Youtube from "../components/Youtube";
import Faq from "../components/FAQ'S/Faq";
import Team from "../components/Team";
import Services from "../components/Services/MyServices";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
    <Navbar/>
        <Hero/>
        <Youtube/>
        <Services/>
        <Faq/>
        <Team/>
         </div>

  )
}

export default Home
