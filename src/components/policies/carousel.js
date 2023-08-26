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
            about:"Be sure to add aria-expanded to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of aria-expanded=false. If you’ve set the collapsible element to be open by default using the show class, set aria-expanded=true on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element)"


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
      items: 4
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

<div class="mh-100"  >
    <div >
        <br/>
        <br/>
        
    <Carousel responsive={responsive} >

{data.map((policy,index)=>{
        return(
        <div class="card" style={{width: "18rem",marginLeft:"10%"}}>
  <div class="card-body">
    <h5 class="card-title">{policy.name}</h5>
    <p class="card-text">{policy.about}</p>
    <a href="#" onClick={()=>handlepolicyabout(policy)} class="btn btn-primary">Know More</a>
  </div>
</div>
        )
            
        
        

    })}

</Carousel>
        
        
        
        
        
        </div>





<div id="schemes">

</div>
{showpolicy?.scheme?<>
<div  style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>

Explore Schemes

</div>


<div class="accordion accordion-flush" id="accordionExample">
{   
    
    showpolicy?.scheme?.map((scheme,index)=>{
        return(
            <div>
            <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center' ,marginTop:"30px", marginBottom:"10px"}}>
            
            <div class="accordion-item w-75">
      <div class="accordion-header" id="headingOne" >
        <button class="accordion-button shadow-lg p-3 mb-5 bg-body rounded" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+scheme.schemeid} aria-expanded="true" aria-controls="collapseOne">
          {scheme.name}
        </button>
      </div>
      <div id={"collapse"+scheme.schemeid} class="accordion-collapse collapse " aria-labelledby="headingOne"  data-bs-parent="#accordionExample">
        <div class="accordion-body" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
    <Table scheme={scheme}/>
    

        </div>
      </div>
    </div>
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