import React, { useState } from 'react';
import Table from './table';
import Card from './card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
let data=[
{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'health insurance',
    about:'about car insurance',
    scheme:[
        {   schemeid:"heart_scheme",
            name:"heart insurance ",
            miniamo:500,
            maxamo:30000,
            mininvesttime:'4 years',
            maxinvesttime:'6 years',
            minage:20,
            maxage:55,
            profitratio:"27%",
            registrationcommsion:'3%',
            installmentcommison:'2%',
            about:"here is about the scheme"


        },
        {
            schemeid:"brain_scheme",
            name:"brain insurance ",
            miniamo:5000,
            maxamo:80000,
            mininvesttime:'7 years',
            maxinvesttime:'9 years',
            minage:20,
            maxage:70,
            profitratio:"27%",
            registrationcommsion:'3%',
            installmentcommison:'2%',
            about:"here is about the scheme"

        }
    ]
},
{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'car insurance',
    about:'about car insurance'
},
{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'car insurance',
    about:'about car insurance'
},
{
    imageurl:"https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a",
    policyname:'house insurance',
    about:'about car insurance'
},
{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'car insurance',
    about:'about car insurance'
},
{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'car insurance',
    about:'about car insurance'
},{
    imageurl:'https://source.unsplash.com/collection/190727/1600x900',
    policyname:'health insurance',
    about:'about car insurance'
}

]
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Carouselapp(){
    const[opendetails,setopendetails]=useState(false);
    const [showpolicydetails,setshowpolicydetails]=useState(false);
    const[showpolicy,setshowpolicy]=useState(data[0]);
    const [getschemedetails,setschemedetails]=useState(<Table/>);
    function handlepolicyabout(policy){
    setshowpolicy(policy);
    setshowpolicydetails(true);
        
    }
    function handleviewscheme(scheme){
        setopendetails(!opendetails);

         setschemedetails(<Table scheme={scheme}/>)
    }
    
    return(

<div class="mh-100">
<Carousel responsive={responsive}>
{data.map((policy,index)=>{
        return(
            <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width:'70%',margin:'10px'}}>
            <img src={policy.imageurl} class="card-img-top" alt="Fissure in Sandstone"/>
            <div class="card-body">
              <h5 class="card-title">{policy.name}</h5>
              <p class="card-text">{policy.about}</p>
              <a  class="btn btn-primary" href="#scheme" onClick={()=>handlepolicyabout(policy)}>Know More</a>
            </div>
          </div>
        )
            
        
        

    })}
</Carousel>;




<div id="schemes">

</div>
{showpolicydetails?<>
<div  style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>

Explore Schemes

</div>
<div >
{
    showpolicy?.scheme?.map((scheme,index)=>{
        return(
            <div>
            <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
  <a class="btn btn-secondary " data-bs-toggle="collapse" style={{width:'80%',marginTop:'20px'}} type="button" href="#demo1111" >
    {scheme.name}
  </a>
   </div>
            <div id="demo1111" class="collapse" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Table scheme={scheme}/>
    
    </div>
 
 
    </div>
            

        )
        
    })
}
</div>



</>:<></>}



    
    
</div>
);

}

export default Carouselapp;