import React, { useState } from 'react';

const MessageAccordAdmin = ({ message, onSaveAdminResponse }) => {
  const status = message.status || 'NOT ANSWERED';
  const [response, setResponse] = useState('');

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSendResponse = async () => {
    try {
      // Send the response to the server to store it in the database
      const responseToDb = await onSaveAdminResponse(message.id, response);
  
      if (responseToDb && responseToDb.status === 200) {
        // Update the status of the message to "ANSWERED" in the UI
        message.status = 'ANSWERED';
        message.response = response; // Add the response to the message
        setResponse(''); // Clear the response textarea
        alert('Response Sent Successfully');
      } 
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the response');
    }
  };

  return (
    <div className="accordion-tab">
      
      <input
        id={`messageToggle-${message.id}`}
        type="checkbox"
        className="accordion-toggle"
        name="toggle"
      />
      <label
        htmlFor={`messageToggle-${message.id}`}
        className="l-bg-blue-dark"
        style={{ backgroundColor: '#11101D' }}
      >
        <div className="message-content">
      <label>
        Question: {message.question}
      </label>
        <span className="status" style={{ marginLeft: '10px', float: 'right' }}>
        Status: {status}
      </span>
    </div>
  </label>

      <div className="accordion-content">
      <p>Answer: {message.answer}</p>
       
        <form class="needs-validation" novalidate
               onSubmit={(e)=>handleSendResponse(e)}
               >
        <textarea
          className="form-control"
          rows="4"
          required
          placeholder="Type your response here..."
          value={response}
          onChange={handleResponseChange}
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary mt-2"
          // onClick={handleSendResponse}
          // disabled={!response.trim()}
        >
          Send
        </button>
        </form>
      </div>
      
    </div>
  );
};

export default MessageAccordAdmin;



