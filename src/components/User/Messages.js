import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MessageAccord from '../accord/MessageAccord'; 
import axios from 'axios';
import Pagination from '../Page/Pagination'


const Messages = () => {
  const customerId = localStorage.getItem('genericId');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [messageComponents, setMessageComponents] = useState([]);

  const [pages,setPages] = useState()
  const [currpage, setcurrpage] = useState(0);
  const pageSize = 2;

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
  
      const response = await axios.get(
        `http://localhost:8080/maxlife/messages/customermessagespage/${customerId}/${currpage}/${pageSize}`
      );
      console.log(response.data);
      setMessages(response.data.content);
      setPages(response.data.totalPages - 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  
  

  useEffect(() => {
    fetchCustomerMessagesByPage(); 
  }, [currpage]);

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

  const handleSendMessage = async () => {
    try {
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

  return (
    <div>
      <Navbar />
      <section className="home-section" id="userContent">
        <h4>Messages</h4>
        <div className="card h-100" style={{ width: '100%', height: '100%' }}>
          <div className="card-body">
            {messageComponents}

          
            <div className="message-box">
              <textarea
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your Query here..."
              ></textarea>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={handleSendMessage}
                  disabled={message.trim() === ''}
                >
                  Send
                </button>
              </div>
            </div>

            <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setcurrpage}/></h1>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;