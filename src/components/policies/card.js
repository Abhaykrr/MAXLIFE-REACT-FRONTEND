import React, { useState } from "react";
let allpolicies=[
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
},
{
    imageurl:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
    policiyname:"policy",
    about:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
}

]
function Card(props){
    const [openknow,setopenknow]=useState(false);
    return (
        <>
         
                        <div class="carousel-item active">
                            <div class="row">
                                {
                                    props.policy.map((policy,index)=>{
                                    return (
                                        <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>

                                    );
                                    })
                                }
                                
                                

                           
                        
                        
                            </div>
                        </div>
                    
  
  
        </>


    );

}

export default Card;