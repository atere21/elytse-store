import React from 'react'
import Navbar from "../components/Navbar";
import Youtube from "../components/Youtube";
import Faq from "../components/FAQ'S/Faq";
import Team from "../components/Team/Team";
import Services from "../components/Services/MyServices";
import Hero from '../components/Hero';
import Vision from "../components/Vision";
import Ambassador from '../components/Ambassador';
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
    <Navbar/>
        <Hero/>
        <Youtube/>
        <Services/>
        <Vision/>
        <Faq/>
        <Ambassador/>
        <Team/>
        <Footer/>
         </div>

  )
}

export default Home