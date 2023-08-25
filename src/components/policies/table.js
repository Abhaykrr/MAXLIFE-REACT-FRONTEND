import React from "react";
import Calculator from "./calculator";
function Table(props){

    return(
<>
<div class="container mt-3 row  ">
     {/* <div class="col">
     <div class="card" >
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-topw-50" alt="Sunset Over the Sea"/>
  <div class="card-body">
    <p class="card-text">{props.scheme.about}</p>
  </div>
</div>
  </div>       */}
  <table class="table table-striped col shadow-lg p-3 mb-5 bg-body-tertiary rounded border border-secondary">
    
    <tbody>
        <tr>
            <th>
                Deatils
            </th>
        </tr>
    {Object.entries(props.scheme).map(([key, value]) => (  
      <tr>
      <td>{key}</td>
      <td>{value}</td>
     
    </tr>
    ))}
    </tbody>
  </table>

  

</div>



</>



    )

}

export default Table;