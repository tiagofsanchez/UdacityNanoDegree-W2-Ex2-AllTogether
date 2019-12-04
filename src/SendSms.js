import React, { Component } from "react"; 


class SendSms extends Component {


    render () {

        const { isDisabled } = this.props;

        return (
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


        )
    }

}

export default SendSms;