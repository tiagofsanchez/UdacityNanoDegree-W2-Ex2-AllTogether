import React from 'react'; 
import SmsHistory from './SmsHistory'
import SendSms from './SendSms';
import PropTypes from 'prop-types';

const MessagingApp = (props) => {

    const { users , messages , onNewSms } = props

    return (
        
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users}</div>

            <SmsHistory messages={messages} users={users} />
            <SendSms users={users} onNewSms={onNewSms}/>
          </div>
    )
}


MessagingApp.prototypes = {
    messages: PropTypes.array.isRequired,
    users: PropTypes.string.isRequired,
    onNewSms: PropTypes.func.isRequired
}
export default MessagingApp