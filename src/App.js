import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MessagingApp from "./MessagingApp";

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

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    const { messages, users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <MessagingApp
              users={user.username}
              messages={messages}
              disabled={this.isDisabled()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
