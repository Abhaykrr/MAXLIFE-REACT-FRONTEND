import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MessageAccord from '../accord/MessageAccord'; 
import axios from 'axios';
import Pagination from '../Page/Pagination'
import {fetchCustomerMessages,getCustomerMessagesByPageUtil, // Import the util function
} from '../Util/CApis';


const Messages = () => {
  const customerId = localStorage.getItem('genericId');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [messageComponents, setMessageComponents] = useState([]);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState();
  const [currpage, setcurrpage] = useState(0);
  const [filter, setFilter] = useState('All');
  const [pageSize, setPageSize] = useState(5);

  

  const fetchCustomerMessages = async (customerId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/maxlife/messages/messages/${customerId}`
      );
      console.log(response.data)
      setMessages(response.data);
      generateMessageComponents();
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCustomerMessagesByPage = async () => {
    try {
      const response = await getCustomerMessagesByPageUtil(customerId,currpage,pageSize);
      console.log(response.data);
      setMessages(response.data.content);
      setPages(response.data.totalPages - 1);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCustomerMessages();
  }, []);

  

  useEffect(() => {
    fetchCustomerMessagesByPage(); 
  }, [currpage, pageSize, filter]);

  useEffect(() => {
    generateMessageComponents(); 
  }, [messages]);

 

  const generateMessageComponents = () => {
    let messageAccord = [];
    if (messages.length > 0) {
      for (let i = 0; i < messages.length; i++) {
        messageAccord.push(<MessageAccord message={messages[i]} />);
      
    }
    console.log(messageAccord)
    setMessageComponents(messageAccord);
  }
  };

  const handleSendMessage = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:8080/maxlife/messages/addmessage/${customerId}`,
        { question: message }
      );
      alert("Question Sent Successfully");
      fetchCustomerMessages(customerId, currpage);
      setMessage('');
      fetchCustomerMessagesByPage()
    } catch (error) {
      alert(error.message);
    }
  };

  const filteredMessages = messages.filter((message) => {
    if (filter === 'All') {
      return true; 
    } else if (filter === 'Answered') {
      return message.status === 'ANSWERED'; 
    } else if (filter === 'NotAnswered') {
      return message.status !== 'ANSWERED'; 
    }
  });


  const filteredMessageComponents = filteredMessages.map((message) => (
    <MessageAccord key={message.id} message={message} />
  ));

  return (
    <div>
      <Navbar />
      <section className="home-section" id="userContent">
      <h4>Messages &nbsp;
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
        <div className="form-group">
        <label htmlFor="messageFilter">Filter by Status:</label>
        <select
          className="form-control"
          id="messageFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Answered">Answered</option>
          <option value="NotAnswered">Not Answered</option>
        </select>
      </div>
      <div className="card h-100" style={{ width: '100%', height: '100%' }}>
        <div className="card-body">
          {filteredMessageComponents.length > 0 ? (
            filteredMessageComponents
          ) : (
            <p>No messages to display.</p>
          )}

          <form
            className="needs-validation"
            noValidate
            onSubmit={(e) => handleSendMessage(e)}
          >
            <div className="message-box">
              <textarea
                className="form-control"
                rows="4"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your Query here..."
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  onClick={handleSendMessage}
                  disabled={message.trim() === ''}
                >
                  Send
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h1>
                <Pagination
                  pages={pages}
                  currpage={currpage}
                  setCurrpage={setcurrpage}
                />
                 </h1>
        </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;