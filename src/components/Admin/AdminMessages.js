import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { saveAdminResponseUtil, fetchAllMessagesUtil } from '../Util/CApis';
import MessageAccordAdmin from '../accord/MessageAccordAdmin';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const fetchCustomerQueries = async () => {
    try {
      const messages = await fetchAllMessagesUtil();
      setMessages(messages);
    } catch (error) {
      setError(error.message);
    }
  };

  const saveAdminResponseToDb = async (messageId, response) => {
    try {
      const adresponse = await saveAdminResponseUtil(messageId, response);
      console.log('adresponse:', adresponse);
      if (adresponse.status === 200) {
        // Update the status of the message to "ANSWERED" in the UI
        const updatedMessages = messages.map((message) =>
          message.id === messageId
            ? { ...message, status: 'ANSWERED', response } // Add the response to the message
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
        </div>
      </section>
    </div>
  );
};

export default AdminMessages;

