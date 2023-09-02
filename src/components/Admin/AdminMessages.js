import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { saveAdminResponseUtil, fetchAllMessagesUtil, getAllMessagesPageUtil } from '../Util/CApis';
import MessageAccordAdmin from '../accord/MessageAccordAdmin';
import Pagination from '../Page/Pagination'

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const [pages,setPages] = useState()
  const [currpage, setcurrpage] = useState(0);
  const[pagesize,setPageSize]=useState(5)
  const pageSize = 2;


  const fetchCustomerQueries = async () => {
    try {
      const messages = await fetchAllMessagesUtil();
      console.log('messages:', messages);
      setMessages(messages);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchAllMessagesByPage = async () => {
    try {
      const response = await getAllMessagesPageUtil(currpage, pageSize); 
      console.log(response);
      setMessages(response.data.content);
      setPages(response.data.totalPages - 1);
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
    fetchCustomerQueries();
  }, []);

  useEffect(() => {
    fetchAllMessagesByPage ();
  }, [currpage]);

  
  return (
    <div>
    <Navbar />
    <section className="home-section" id="adminContent">
      <h4>Customer Queries&nbsp;
          <div
            style={{
              display: 'inline-block',
              width: '100px',
              height: '50px',
              borderRadius: '10px',
            }}
          >
            <select
              onChange={(e) => setPageSize(e.target.value)}
              className="form-control text-center"
              id="planStatus"
            >
              <option value="5">5 Items</option>
              <option value="10">10 Items</option>
              <option value="15">15 Items</option>
            </select>
          </div>
        </h4>
        {error && <p>Error: {error}</p>}
        <div className="card h-100" style={{ width: '100%', height: '100%' }}>
          <div className="card-body">
          {messages && messages.length > 0 ? (
              messages.map((message) => (
                <MessageAccordAdmin
                  key={message.id}
                  message={message}
                  onSaveAdminResponse={saveAdminResponseToDb}
                />
              ))
            ) : (
              <p>No messages to display.</p>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>
              <Pagination pages={pages} currpage={currpage} setCurrpage={setcurrpage} />
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};







export default AdminMessages;

