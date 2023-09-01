import React from 'react';

const MessageAccord = ({ message }) => {
  const status = message.status || 'NOT ANSWERED'; 

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
        Question: {message.question} 
      </label>

      <div className="accordion-content">
        <p>Answer: {message.answer}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default MessageAccord;