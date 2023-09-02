import React, { useState, useEffect } from 'react';
import Navbar from '../Shared Components/Navbar/Navbar';
import { saveAdminResponseUtil, fetchAllMessagesUtil, getAllMessagesPageUtil } from '../Util/CApis';
import MessageAccordAdmin from '../Shared Components/accord/MessageAccordAdmin';
import Pagination from '../Shared Components/Page/Pagination'

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const [pages,setPages] = useState()
  const [currpage, setcurrpage] = useState(0);
  const pageSize = 4;


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
      const response = await getAllMessagesPageUtil(currpage, pageSize); 
      console.log(response);
      setMessages(response.content);
      setPages(response.totalPages - 1);
    } catch (error) {
      setError(error.message);
    }
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
  }, [currpage]);

  
  return (
    <div>
    <Navbar />
    <section className="home-section" id="adminContent">
      <h4>Customer Queries</h4>
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
          <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setcurrpage} /></h1>
        </div>
      </div>
    </section>
  </div>
);
};







export default AdminMessages;

