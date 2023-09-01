import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "../CSS/card.css"
import { useNavigate } from 'react-router-dom'
import { fetchAllMessagesUtil, getAllPlansUtil, getAllSchemesUtil, getallAgents, getallEmployes } from '../Util/CApis'
import { Helmet } from 'react-helmet'


const EmployeeDashboard = () => {

    
  const navigate = useNavigate()

  const [totalPlans,setTotalPlans] = useState()
  const [toatlSchemes,setTotalSchemes] = useState()
  const [totalEmployes,setTotalEmployes]=useState();
  const [totalAgents,setTotalAgents]=useState();
  const [totalMessages, setTotalMessages] = useState();

  const updateCards = async ()=>{
    try {
        
        let r1 = await getAllPlansUtil()
        let r2 = await getAllSchemesUtil()
        let r3=  await getallEmployes();
        let r4=  await getallAgents();
        let r5=  await fetchAllMessagesUtil();
        setTotalPlans(r1.data.length)
        setTotalSchemes(r2.data.length)
        setTotalEmployes(r3.data.length);
        setTotalAgents(r4.data.length);
        setTotalMessages(r5.data.length)



    } catch (error) {
        alert(error.message)
    }
  }

  useEffect(()=>{
    updateCards()
  },[])

  return (
    <div>
        <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
        <Navbar/>

        <section className="home-section" id="userContent">
      <div className="col-md-10 ">
        <div className="row ">

        <div className="col-xl-3 col-lg-6" onClick={()=>{
          navigate('/employee/dashboard/addplan')
        }}>
          <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Add Plan</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h5 className="d-flex align-items-center mb-0">
                                {totalPlans} Plans
                            </h5>
                        </div>
                        <div className="col-4 text-right">
                            {/* <span>12.5% <i className="fa fa-arrow-up"></i></span> */}
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-lg-6" onClick={()=>{
           navigate('/employee/dashboard/addscheme')
        }}>
            <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Add Scheme</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h5 className="d-flex align-items-center mb-0">
                                {toatlSchemes} Schemes
                            </h5>
                        </div>
                        <div className="col-4 text-right">
                            {/* <span>9.23% <i className="fa fa-arrow-up"></i></span> */}
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="col-xl-3 col-lg-6" onClick={()=>{
           navigate('/employee/dashboard/editplan')
        }}>
            <div className="card l-bg-green-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Edit Plan</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h5 className="d-flex align-items-center mb-0">
                            {totalPlans} Plans
                            </h5>
                        </div>
                        <div className="col-4 text-right">
                            {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/editscheme')
         }}>
          <div class="card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Edit Scheme</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {toatlSchemes} Schemes
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  
        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/addemploye')
         }}>
          <div class="card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Add Employee</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalEmployes} Employes
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  



        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/editemploye')
         }}>
          <div class="card l-bg-green-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Edit Employee</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalEmployes} Employes
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  


        

        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/addagent')
         }}>
          <div class="card l-bg-blue-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Add Agent</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalAgents} Agents
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  



        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/editagent')
         }}>
          <div class="card l-bg-cherry">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Edit Agent</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalAgents} Agents
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  


        <div className="col-xl-3 col-lg-6" onClick={() => {
              navigate('/employee/dashboard//messages'); // Navigate to messages
            }}>
              <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Messages</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h5 className="d-flex align-items-center mb-0">
                      {totalMessages} Messages
                      </h5>
                    </div>
                    <div className="col-4 text-right">
                      {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                    </div>
                  </div>
                  <div className="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                    <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>


        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/allusers')
         }}>
          <div class="card l-bg-blue-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Users</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                Users
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  

        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/allemployes')
         }}>
          <div class="card l-bg-green-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Employees</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalEmployes} Employes
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  

        <div className="col-xl-3 col-lg-6"onClick={()=>{
           navigate('/employee/dashboard/allagent')
         }}>
          <div class="card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Agents</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <h5 className="d-flex align-items-center mb-0">
                                {totalAgents} Agents
                              </h5>
                          </div>
                          <div className="col-4 text-right">
                              {/* <span>10% <i className="fa fa-arrow-up"></i></span> */}
                          </div>
                      </div>
                      <div className="progress mt-1 " data-height="8" style={{height: '8px'}}>
                          <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                      </div>
                  </div>
              </div>
        </div>  




       
        </div>
        </div>
      </section>
      
    </div>
  )
}

export default EmployeeDashboard
