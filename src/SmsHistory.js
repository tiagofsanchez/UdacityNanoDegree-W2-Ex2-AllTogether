import React from 'react'; 

const SmsHistory = (props) => {

    const { messages , users } = props;

    return (
        <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === users ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>

    )
}

export default SmsHistory;