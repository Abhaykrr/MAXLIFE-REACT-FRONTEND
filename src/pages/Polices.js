import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
// import Card from "../components/policies/card";
import Carousel from "../components/policies/carousel";
import { Helmet } from "react-helmet";
import Policy from "./Policy";
function Polices(){

    return(
        <>
        <Navbar/>
       <Policy/>    
      
        {/* <Card/> */}
        {/* <Carousel/> */}
        <Footer/>
        
        </>

    );

}
export default Polices;