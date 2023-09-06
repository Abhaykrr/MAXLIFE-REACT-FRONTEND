import React, { useEffect, useState } from 'react';
import Navbar from "../Shared Components/Navbar/Navbar";
import MessageAccord from '../Shared Components/accord/MessageAccord';
import axios from 'axios';
import Pagination from '../Shared Components/Page/Pagination';

const Messages = () => {
  const customerId = localStorage.getItem('genericId');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [messageComponents, setMessageComponents] = useState([]);

  const [pages, setPages] = useState();
  const [currpage, setCurrpage] = useState(0);
  const [pagesize, setPageSize] = useState(5);

  const [status, setStatus] = useState('All'); // Default value

  const fetchCustomerMessages = async () => {
    try {
      // let response;

      // if (status === 'All') {
      //   // Fetch all messages (both answered and not answered)
      //   response = await axios.get(
      //     `http://localhost:8080/maxlife/messages/customermessagespage`,
      //     {
      //       params: {
      //         customerid: customerId,
      //         status: status,
      //         currpage: pageNo,
      //         pagesize: pageSize
      //       }
      //     }
      //   );
      // } else {
        // Fetch messages based on selected status (Answered or Not Answered)
        const response = await axios.get(
          `http://localhost:8080/maxlife/messages/customermessagespage`,
          {
            params: {
              customerid: customerId,
              status: status,
              currpage: currpage,
              pagesize: pagesize
            }
          }
        );
      

      console.log(response.data);
      setMessages(response.data.content);
      setPages(response.data.totalPages - 1);
      generateMessageComponents();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    fetchCustomerMessages();
  }, [customerId, currpage, pagesize, status]);

  useEffect(() => {
    generateMessageComponents();
  }, [messages]);

  const generateMessageComponents = () => {
    let messageAccord = [];
    if (messages.length > 0) {
      for (let i = 0; i < messages.length; i++) {
        messageAccord.push(<MessageAccord message={messages[i]} />);
      }
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
      fetchCustomerMessages(customerId, currpage, pagesize, status);
      setMessage('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="home-section" id="userContent">
        <h4>Messages</h4>
        <br/>
        <h4>
          
          <div style={{ display: 'inline-block',marginRight:'2rem' , width: '100px', height: '50px', borderRadius: '10px' }}>
            <select
              onChange={(e) => {
                setPageSize(e.target.value);
                setCurrpage(0); // Reset to the first page when pagesize changes
              }}
              value={pagesize} // Controlled component
              className="form-control text-center"
              id="planStatus"
            >
              <option value="5">5 Items</option>
              <option value="10">10 Items</option>
              <option value="15">15 Items</option>
            </select>
          </div>

          <div style={{ display: 'inline-block', width: '100px', height: '50px', borderRadius: '10px' }}>
            <select
              onChange={(e) => setStatus(e.target.value)}
              value={status} // Controlled component
              className="form-control text-center"
              id="planStatus"
            >
              <option value="All">All</option>
              <option value="Answered">Answered</option>
              <option value="Not Answered">Not Answered</option>
            </select>
          </div>
        </h4>
        <div className="card h-100" style={{ width: '100%', height: '100%' }}>
          <div className="card-body">
            {messageComponents}
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
                    setCurrpage={setCurrpage}
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