import React from "react";
import Navbar from "../components/Shared Components/common/navbar"
import Footer from "../components/Shared Components/common/footer";
import Hero from "../components/home/hero";
import Explainone from "../components/home/explainone";
import Team from "../components/home/team";
import Testimonials from "../components/home/testimonal";

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
