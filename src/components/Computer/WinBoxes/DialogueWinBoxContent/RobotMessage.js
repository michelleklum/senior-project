// RobotMessage component to display the chatbot's chat icon and message
import React from "react";
import "./RobotMessage.css";

class RobotMessage extends React.Component {
  render() {
    return (
      <>
        <i className="fab fa-android fa-3x bot-chat-icon"></i>
        <div className="bot-message">{this.props.message}</div>
      </>
    );
  }
}

export default RobotMessage;
