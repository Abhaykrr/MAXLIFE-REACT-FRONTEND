import React from "react";
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

    return (
        <>
       <div class="row row-cols-1 row-cols-md-4 bg-secondary">
        {allpolicies.map((policy,index)=>{
            return(
                <div class="card m-5 shadow p-3 mb-5 bg-body-tertiary rounded">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={policy.imageurl} class="img-fluid"/>
    <a href="#!">
      {/* <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div> */}
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{policy.policiyname}</h5>
    <p class="card-text">{policy.about}</p>
    <a href="#!" class="btn btn-primary">Know more</a>
  </div>
</div>
            )
            
        })}
  
  </div>
  
        </>


    );

}

export default Card;