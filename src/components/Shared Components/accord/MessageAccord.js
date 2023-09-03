import React from 'react';

const MessageAccord = ({ message }) => {
  const status = message.status === null || message.status === undefined ? 'NOT ANSWERED' : message.status;
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
        style={{
          display: 'flex',
          flexDirection: 'row', // Horizontal alignment
          alignItems: 'center', // Vertical alignment
          backgroundColor: '#11101D'
        }}
      >
        Question: {message.question}
        <span style={{ marginLeft: 'auto' }}>Status: {status}</span>
      </label>

      <div className="accordion-content">
        <p>Answer: {message.answer}</p>
      </div>
    </div>
  );
};

export default MessageAccord;
