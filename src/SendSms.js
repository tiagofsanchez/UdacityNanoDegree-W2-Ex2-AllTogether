import React, { Component } from "react";

const initState =  {
    username: "",
    text: ""
  };


class SendSms extends Component {
  state = initState

  updateSmsHandler = e => {
    const { value } = e.target;
    const { users } = this.props;

    this.setState(prevState => ({
      ...prevState,
      username: users,
      text: value
    }));
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    if (this.state.text === "") return true;
  };

  sendSmsHandler= (e) => {
    e.preventDefault();
    console.log(this.state)
    this.setState(initState)
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <form className="input-group" onSubmit={this.sendSmsHandler}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.updateSmsHandler}
            value={text}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.sendSmsHandler}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendSms;
