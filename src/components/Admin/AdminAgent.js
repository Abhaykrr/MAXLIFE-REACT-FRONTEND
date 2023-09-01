import { useEffect,useState } from "react";
import { getallAgents,getpageAgents } from "../Util/CApis";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Page/Pagination";
import AgentCustomers from "../Agent/AgentCustomers"

function AdminAgent(){
    const [agents,setagents]=useState();
    const [pages,setPages] = useState()
    const [currpage,setCurrpage] =useState(0)
    const pagesize = 8;

  const [particularAgentId,setParticularAgentId] = useState()


    async function getagent(){
     
      
        let response=await getpageAgents(currpage);
        setPages(response.data.totalPages-1)
      setagents(response.data.content);
      
    }
    useEffect(()=>{
      getagent();
    },[currpage])
    


return (
<div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
      <Navbar/>
      <section className="home-section" id="userContent">
      <div className="col-md-12 ">
        <div className="row ">
        
        {
            agents?.map((agent,index)=>{
                return(
<div class="col">
<div style={{width:"16rem"}}>
<div class="card card-cascade wider" onClick={()=>setParticularAgentId(agent.agentid)}>

  {/* <!-- Card image --> */}
  <div class="view view-cascade overlay text-center">
  <img alt="image" style={{width:"40%",marginTop:"1rem"}} class="rounded-circle img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  {/* <!-- Card content --> */}
  <div class="card-body card-body-cascade text-center pb-0">

    {/* <!-- Title --> */}
    <h4 class="card-title"><strong>{agent.firstname} {agent.lastname}</strong></h4>
    
    {/* <!-- Text --> */}
    
    <p class="card-text">Qualification:- {agent.qualification}</p>

    <div class="card-footer text-muted text-center mt-4">
      Status: {agent.status} 
    </div>

  </div>

</div>
{/* <!-- Card Wider --> */}

</div>
</div>
                )
            })
        }
     
       

  
        

     <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>
        </div>
        </div>
        
      </section>

      <div style={{display:'flex',alignItems:'center',justifyContent:'center' }} >
                    {particularAgentId && <AgentCustomers agId={particularAgentId}/>}
                  </div>

      
    </div>


);

}

export default AdminAgent;