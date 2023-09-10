import React from "react";
import { useState,useEffect } from "react";
import { fetchAllMessagesUtil, getAllClaims, getAllPlansUtil, getAllSchemesUtil, getAllUsers, getallAgents, getallEmployes } from "../Util/CApis";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import Navbar from "../Shared Components/Navbar/Navbar"
import axios from "axios";
import {
 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  
} from 'chart.js';
import { Line } from 'react-chartjs-2';
function Employeanalysis(){
    ChartJS.register(ArcElement, Tooltip, Legend);
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Policy Buyed and Amount',
        },
      },
    };
    const [totalPlans,setTotalPlans] = useState()
    const [toatlSchemes,setTotalSchemes] = useState()
    const [totalEmployes,setTotalEmployes]=useState();
    const [totalAgents,setTotalAgents]=useState();
    const [totalMessages, setTotalMessages] = useState();
    const [totalusers,settotalusers]=useState();
    const [claims,setClaims]=useState({approved:0,pending:0})
    const [plandata,setplandata]=useState({active:0,inactive:0})
    const [schemedata,setscheme]=useState({active:0,inactive:0})
    const [messages,setmessages]=useState({answer:0,noanswer:0})
    const [dates,setdates]=useState();
    const [agentamount,setagentamount]=useState();
    const [selfamount,setselfamount]=useState();
  
    const getstats = async ()=>{
      try {
          
          let r1 = await getAllPlansUtil()
          let r2 = await getAllSchemesUtil()
          let r3=  await getallEmployes();
          let r4=  await getallAgents();
          let r5=  await fetchAllMessagesUtil();
          let r6= await getAllUsers();
          let r7= await getAllClaims();

          setTotalPlans(r1.data?.length)
          setTotalSchemes(r2.data?.length)
          setTotalEmployes(r3.data?.length);
          setTotalAgents(r4.data?.length);
          setTotalMessages(r5.data.length)
          settotalusers(r6.data.totalElements);
          console.log(r5,"All Messages");
          let active=0;
          r1.data.map((dat)=>{
            if(dat.status=="Active")active++;
          })
          active=0;
          r2.data.map((dat)=>{
            if(dat.status=="Active")active++;
          })
          setplandata({active:active,inactive:(r2.data.length-active)});
          active=0;
          r5.data.map((dat)=>{
            if(dat.status=="ANSWERED")active++;
          })
          setmessages({answer:active,noanswer:r5.data.length-active});
          console.log(active);
          
          let pendamount=0;
          let approamount=0;
          r7.data.content.map((res)=>{
            
            if(res.status=="Pending"){
             
              pendamount+=res.claimamount
            }else{
             approamount+=res.claimamount
            }
          })
          setClaims({pending:pendamount,approved:approamount});

          // Line chart Claim API Start


          const response = await axios.get('http://localhost:8080/maxlife/allclaims', {
            params: {
              inputtext:"",
              status:"",
              currpage: 0,
              pagesize: 10000
            }
          });
          let selamo=[];
          let ageamo=[];
          let datedata=[];
          console.log(response.data.content,"All claims content")
          response.data.content.map((data)=>{
            if(data.agent==null){
              selamo.push(data.claimamount);
            }else{
              ageamo.push(data.claimamount);
            }
            datedata.push(data.date);

          })
          setagentamount(ageamo);
          setselfamount(selamo);
          setdates(datedata);







          // line chart claim api end
  
  
      } catch (error) {
          alert(error.message)
      }
    }
  
    useEffect(()=>{
      getstats()
    },[])
    const total_data = {
        labels: ['Total Agents', 'Total Employes', 'Total Plans', 'Total Users', 'Total Schemes', 'All Messages'],
        datasets: [
          {
            label: 'no of',
            data: [totalAgents, totalEmployes, totalPlans, totalusers, toatlSchemes, totalMessages],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const Claim_data = {
        labels: ['Pending Amount', 'Approved Amount'],
        datasets: [
          {
            label: '',
            data: [claims.pending,claims.approved],
            backgroundColor: [
              
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const Plan_data = {
        labels: ['Active Plans', 'Inactive Plans'],
        datasets: [
          {
            label: '',
            data: [plandata.active,plandata.inactive],
            backgroundColor: [
              
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
              
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const Messages_data = {
        labels: ['Answered ', 'Not Answered'],
        datasets: [
          {
            label: 'Messages',
            data: [messages.answer,messages.noanswer],
            backgroundColor: [
              
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
              
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

      // Line data

      const Line_data = {
        labels:dates,
        datasets: [
          {
            label: 'Agents',
            data: agentamount,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          
          },
          {
            label: 'Self',
            data:selfamount,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };




      // Line data ends
    return(
       <div>
        <Navbar/>
        <section className="home-section" id="userContent">
       

<div class="container">
  <div class="row">
    {/* <div class="col-sm">
       <div className="card h-100">
<Pie options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'All Data',
        },
      },
    }} data={total_data} />
</div>
    </div> */}
    <div class="col-sm">
       <div className="card h-100">
<Pie options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'All Claim / Withdrawn Amount',
        },
      },
    }} data={Claim_data} />
</div>
    </div>
    <div class="col-sm" style={{width:"20%",marginBottom:"1rem"}}>
       <div className="card h-100">
<Pie options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Scheme Activity Status',
        },
      },
    }} data={Plan_data} />
</div>
    </div>
    
    <div class="col-sm" style={{width:"20%",marginBottom:"1rem"}}>
       <div className="card h-100">
<Pie options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Query Stats',
        },
      },
    }} data={Messages_data} />
</div>
    </div>

    

  




  </div>
</div>


<div class="container" style={{width:"80%",height:"50%",marginTop:"3rem"}}>
  <div class="row">
<div class="col-sm" >
       <div className="card h-100">
<Line options={options} data={Line_data} />

</div>
    </div>
    </div>
    </div>


        </section>
         
       </div>

    )

}



export default Employeanalysis;