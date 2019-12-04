import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MessagingApp from "./MessagingApp";
import PropTypes from 'prop-types';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" }
    ],
    users: [{ username: "Amy" }, { username: "John" }]
  };

  createNewSms = (newSms) => {
    console.log(newSms)
    this.setState((PrevState)=>({
      messages: PrevState.messages.concat(newSms)
    }))
    console.log(this.state)
  }

  render() {
    const { messages, users } = this.state;
    console.log(this.state)
    console.log(this.state.messages)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <MessagingApp
              key={user.username}
              users={user.username}
              messages={messages}
              onNewSms={this.createNewSms}
            />
          ))}
        </div>
      </div>
    );
  }
}

App.prototypes = {
  users: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  onNewSms: PropTypes.func.isRequired
}


export default App;
