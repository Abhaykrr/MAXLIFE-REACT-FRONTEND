import React, { useEffect, useState } from 'react'
import "../components/CSS/accord.css"
import AccordLine from '../components/accord/AccordLine'
import { getAllPlansUtil } from '../components/Util/CApis'


const Policy = () => {
    
    const [planDataDb,setPlanDataDb] = useState({})
    const [currPlanId,setCurrPlanId] = useState()

    const allPlans = async()=>{
        try {
            let response = await getAllPlansUtil()
            console.log(response.data)
            setPlanDataDb(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        allPlans()
    },[])

    
    let sliderData = [];

    if (planDataDb.length > 0) {
        for (let i = 0; i < planDataDb.length; i += 4) {
            const group = planDataDb.slice(i, i + 4);
            let status
            const carouselItem = (
                <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''} text-center`}>
                    <div className="card-wrapper container-sm d-flex justify-content-center ">
                        {group.map((plan, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ width: '10rem', height: '10rem', margin: '20px' }}
                            >
                                <div className="card-body" onClick={()=>{
                                    setCurrPlanId(plan.planid)
                                    console.log(plan.planid)
                                    updateDropDown(plan.insuranceschemes)
                                }}> Exclusively {status = plan.status} &nbsp;
                                    <i className="bx bxs-heart"></i>
                                    <h6 className="card-title">{plan.planname}</h6>
                                    <h6 className="card-title">{plan.insuranceschemes.length}&nbsp;&nbsp;Schemes</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
            if(status === 'Active')
            sliderData.push(carouselItem);
        }
    }

    const[dropAccord,setDropAccord] = useState([])
    let dropDownData = [];

    const updateDropDown = (insuranceschemes)=>{
        dropDownData = []
        console.log("Updating")
        for(let i=0; i<insuranceschemes.length ;i++){
            if(insuranceschemes[i].status === 'Active')
            dropDownData.push(<AccordLine scheme = {insuranceschemes[i]}/>)
        }
        console.log(dropDownData)
        setDropAccord(dropDownData)
    }

 
  return (

    <div style={{backgroundColor:'white'}}>

         <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-inner">

     {/* <div className="carousel-item active text-center">
         <div className="card-wrapper container-sm d-flex  justify-content-center">
     
        <div className="card  " style={{width: '10rem',height:'10rem',margin:'10px'}}>
            <div className="card-body">
                    <i className="fas fa-brain"></i>
                    <i class='bx bxs-heart'></i>
                    <i className="fa-solid fa-brain"></i>   
                    <h5 className="card-title">Card 1</h5>
                    
                </div>
        </div>

        <div className="card  " style={{width: '10rem',height:'10rem',margin:'10px'}}>
            <div className="card-body">
                    <i className="fas fa-brain"></i>
                    <i class='bx bxs-heart'></i>
                    <i className="fa-solid fa-brain"></i>   
                    <h5 className="card-title">Card 1</h5>
                    
                </div>
        </div>

        <div className="card  " style={{width: '10rem',height:'10rem',margin:'10px'}}>
            <div className="card-body">
                    <i className="fas fa-brain"></i>
                    <i class='bx bxs-heart'></i>
                    <i className="fa-solid fa-brain"></i>   
                    <h5 className="card-title">Card 1</h5>
                    
                </div>
        </div>

        <div className="card  " style={{width: '10rem',height:'10rem',margin:'10px'}}>
            <div className="card-body">
                    <i className="fas fa-brain"></i>
                    <i class='bx bxs-heart'></i>
                    <i className="fa-solid fa-brain"></i>   
                    <h5 className="card-title">Card 1</h5>
                    
                </div>
        </div>

        <div className="card  " style={{width: '10rem',height:'10rem',margin:'10px'}}>
            <div className="card-body">
                    <i className="fas fa-brain"></i>
                    <i class='bx bxs-heart'></i>
                    <i className="fa-solid fa-brain"></i>   
                    <h5 className="card-title">Card 1</h5>
                    
                </div>
        </div>
       
        </div>
    </div> */}

    {sliderData}

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
</div>
         </div> 

        {/* Drop Down */}
                <div style={{backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
                    <div className="accordion">
                        {/* <AccordLine/>
                        <AccordLine/> */}
                        {dropAccord}
                    </div>
                
                </div>
        {/* Drop Down */}

    </div>
  )
}

export default Policy
