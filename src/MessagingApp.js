import React from 'react'; 
import SmsHistory from './SmsHistory'
import SendSms from './SendSms';

const MessagingApp = (props) => {

    const { users , messages } = props

    return (
        
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users}</div>

            <SmsHistory messages={messages} users={users} />
            <SendSms users={users}/>
            
          </div>
    )
}

export default MessagingApp