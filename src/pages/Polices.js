import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
// import Card from "../components/policies/card";
import Carousel from "../components/policies/carousel";
function Polices(){

    return(
        <>
        <Navbar/>

        {/* <Card/> */}
        <Carousel/>
        <Footer/>
        
        </>

    );

}
export default Polices;