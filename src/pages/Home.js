import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Hero from "../components/home/hero";
import Explainone from "../components/home/explainone";
import Team from "../components/home/team";
import Testimonials from "../components/home/testimonal";




import { useState,useRef } from "react";
function Home() {


// setInterval(function() {
//   console.log("from home page : - ",loginopen);
// }, 20000);

  return (
    <div >
      <Navbar/>
      
     
      
      <Hero/>
      
      <Explainone/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default Home;
