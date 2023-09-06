import React, { useState, useEffect } from 'react';
import Navbar from '../Shared Components/Navbar/Navbar';
import { saveAdminResponseUtil, fetchAllMessagesUtil, getAllMessagesPageUtil } from '../Util/CApis';
import MessageAccordAdmin from '../Shared Components/accord/MessageAccordAdmin';
import Pagination from '../Shared Components/Page/Pagination'
import axios from 'axios'

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const [pages,setPages] = useState()
  const [currpage,setCurrpage] =useState(0)
  const [pagesize,setPageSize] = useState(5);
  
   const[status,setStatus] = useState('ALL')
  
  

  const fetchCustomerQueries = async () => {
    try {
      const messages = await fetchAllMessagesUtil();
      setMessages(messages);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchAllMessagesByPage = async () => {
   try {
    let response;
    if (status === 'All') {
      response = await axios.get(
        `http://localhost:8080/maxlife/messages/allmessagespage`,
        {
          params: {
            status: 'All', // Set status parameter to 'All'
            currpage: currpage,
            pagesize: pagesize,
          },
        }
      );
    } else if (status === 'NotAnswered') {
      response = await axios.get(
        `http://localhost:8080/maxlife/messages/allmessagespage`,
        {
          params: {
            status: 'NOT ANSWERED', // Set status parameter to 'NOT ANSWERED'
            currpage: currpage,
            pagesize: pagesize,
          },
        }
      );
    } else {
      response = await axios.get(
        `http://localhost:8080/maxlife/messages/allmessagespage`,
        {
          params: {
            status: status,
            currpage: currpage,
            pagesize: pagesize,
          },
        }
      );
    }
      console.log('API Response:', response);
      setMessages(response.data.content);
      setPages(response.data.totalPages - 1);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
    setCurrpage(0); 
  };

  const saveAdminResponseToDb = async (messageId, response) => {
    try {
      const adresponse = await saveAdminResponseUtil(messageId, response);
      console.log('adresponse:', adresponse);
      if (adresponse.status === 200) {
        const updatedMessages = messages.map((message) =>
          message.id === messageId
            ? { ...message, status: 'ANSWERED', response } 
            : message
        );
        setMessages(updatedMessages);
        alert('Response Sent Successfully');
      } 
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the response');
    }
  };

  useEffect(() => {
    fetchAllMessagesByPage();
  }, [currpage,pagesize,status]);
  

  
  return (
    <div>
    <Navbar />
    <section className="home-section" id="adminContent">
      <h4>Customer Queries</h4>
      <br/>
      <h4>
              <div style={{display:'inline-block',width:'100px',marginRight:'2rem',height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setPageSize(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="5">5 Items</option>
                                    <option value="10">10 Items</option>
                                    <option value="15">15 Items</option>
              </select></div>

              <div style={{ display: 'inline-block', width: '100px', height: '50px', borderRadius: '10px' }}>
            <select onChange={(e) => handleStatusChange(e.target.value)} className="form-control text-center" id="planStatus">
              <option value="All">All</option>
              <option value="Answered">Answered</option>
              <option value="NotAnswered">Not Answered</option>
            </select>
          </div>
                                
                                </h4>
      {error && <p>Error: {error}</p>}
      <div className="card h-100" style={{ width: '100%', height: '100%' }}>
        <div className="card-body">
          {messages.map((message) => (
            <MessageAccordAdmin
              key={message.id}
              message={message}
              onSaveAdminResponse={saveAdminResponseToDb}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
        </div>
      </div>
    </section>
  </div>
);
};
export default AdminMessages;