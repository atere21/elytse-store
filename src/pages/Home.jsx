import React from 'react'
import Navbar from "../components/Navbar";
import Youtube from "../components/Youtube";
import Faq from "../components/FAQ'S/Faq";
import Team from "../components/Team/Team";
import Services from "../components/Services/MyServices";

import Vision from "../components/Vision";
import Ambassador from '../components/Ambassador';
import Footer from "../components/Footers/Footer";
import Revolution from '../components/Revolution';
import Main from '../components/Main';

const Home = () => {
  return (
    <div>
    <Navbar/>
        <Main/>
        <Youtube/>
        <Services/>
        <Vision/>
        <Faq/>
        <Ambassador/>
        <Team/>
        <Revolution />
        <Footer/>
         </div>

  )
}

export default Home
