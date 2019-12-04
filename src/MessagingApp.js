import React from 'react'; 


const MessagingApp = (props) => {

    const { users , messages , isDisabled } = props

    return (
        
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users}</div>

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

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={isDisabled}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
    )
}

export default MessagingApp