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
function Useranalysis(){
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
          text: 'Policy amount and dates',
        },
      },
    };

    const [totalclaims,settotalclaims] = useState()
    const [toatlSchemes,setTotalSchemes] = useState({claimed:0,unclaimed:0})
    const [totalDates,setTotalDates]=useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
    const [totalpayamount,settotalpayamount]=useState();
    const [totalMessages, setTotalMessages] = useState({answer:0,unamswer:0});
    const [claimedamount,setclaimedamount]=useState();
    const [claims,setClaims]=useState({approved:0,pending:0})
    const [plandata,setplandata]=useState({active:0,inactive:0})
    const [schemedata,setscheme]=useState({active:0,inactive:0})

    async function getclaims(){
        try{
          
          const response = await axios.get('http://localhost:8080/maxlife/getselfclaim', {
                params: {
                  inputtext:"",
                  status:"All",
                  currpage: 0,
                  pagesize: 10000,
                  custid:localStorage.getItem("genericId")          }
              });
              let pendamount=0;
              let approamount=0;
              let datesdata=[];
              let totalpay=[];
              response.data.content.map((res)=>{
                
                if(res.status=="Pending"){
                 
                  pendamount+=res.claimamount
                }else{
                 approamount+=res.claimamount
                }
                // totalpay.push(res.claimamount);
                // datesdata.push(res.date);
              })
              // settotalpayamount(totalpay);
              // setTotalDates(datesdata);
              settotalclaims(response.data.totalElements)
              setClaims({pending:pendamount,approved:approamount});
              console.log(response.data,"from all cliams");
              



              const response2 = await axios.get('http://localhost:8080/maxlife/getaccounts', {
          params: {
            customerid: localStorage.getItem("genericId"),
            inputtext:"",
            status:"All",
            currpage: 0,
            pagesize: 1000
          }
        });
        let active=0;
          response2?.data?.content?.map((data)=>{
              if(data.claimstatus=="Claimed"){
                active++;
              
              }
              totalpay.push(data.amount);
              datesdata.push(data.issuedate);
            })
            settotalpayamount(totalpay);
            setTotalDates(datesdata);
          console.log(response2,"claimed policy")
          setTotalSchemes({claimed:active,unclaimed:response2.data.totalElements-active});
          const response3 = await axios.get(
            `http://localhost:8080/maxlife/messages/customermessagespage`,
            {
              params: {
                customerid: localStorage.getItem("genericId"),
                status: "All",
                currpage: 0,
                pagesize: 1000
              }
            }
          );
          active=0;
          console.log(response3,"all messages");
          response3.data.content.map((data)=>{
              if(data.status=="ANSWERED")active++;
          })
          setTotalMessages({answer:active,unamswer:response3.data.totalElements-active})
            //   setPages(response.data.totalPages-1)
            // setClaims(response.data.content);
        }catch(e){
          alert(e.message);
        }
      }
  
    useEffect(()=>{
      getclaims()
    },[])
   
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
      const Policy_data = {
        labels: ['Claimed Policy', 'Unclaimed Policy'],
        datasets: [
          {
            label: '',
            data: [toatlSchemes.claimed,toatlSchemes.unclaimed],
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
      const Message_data = {
        labels: ['Answered Messages', 'Unanswered Messages'],
        datasets: [
          {
            label: '',
            data: [totalMessages.answer,totalMessages.unamswer],
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
      const Line_data = {
  labels:totalDates,
  datasets: [
    {
      fill: true,
      label: 'Policyes',
      data: totalpayamount,
      
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
    // },
    // {
    //   label: 'Approved',
    //   data:[null,3209,32,54,65,76],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
    return(
       <div>
        <Navbar/>
        <section className="home-section" id="userContent">
       

<div class="container">
  <div class="row">
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
          text: 'Policy Status',
        },
      },
    }} data={Policy_data} />
</div>
    </div>
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
          text: 'Policy Claim Amount',
        },
      },
    }} data={Claim_data} />
{totalclaims==0?<>No claims Made</>:<></>}
</div>
    </div>
    <div class="col-sm" style={{width:"20%"}}>
       <div className="card h-100">
<Pie options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Query Asked',
        },
      },
    }} data={Message_data} />
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



export default Useranalysis;