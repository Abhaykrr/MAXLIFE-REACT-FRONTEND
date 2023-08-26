import React from "react";
import Calculator from "./calculator";
function Table(props){
let data={...props.scheme}
delete data.about;
    return(
<>
<div class="container mt-3 row  ">
     <div class="col" style={{width:'30%'}}>
     <div class="card" >
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-topw-50" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">{props.scheme.about}</p>
  </div>
</div>
  </div>      
  <table class="table table-striped col shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-secondary">
    
    <tbody>
    
    {Object.entries(data).map(([key, value]) => (  
      <tr>
      <td>{key}</td>
      <td>{value}</td>
     
    </tr>
    ))}
   
    </tbody>
  </table>

   <div class="col">

      <Calculator/>
      
    </div>

</div>



</>



    )

}

export default Table;