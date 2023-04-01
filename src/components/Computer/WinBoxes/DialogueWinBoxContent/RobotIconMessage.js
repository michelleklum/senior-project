import "./RobotIconMessage.css";
import ChatLoadingDots from "./ChatLoadingDots";

function RobotMessage(props) {
  return (
    <div id="bot-icon-and-message">
      <i id="bot-icon" className="fab fa-android fa-3x"></i>
      <div id="bot-message" className="message">
        {props.type === "loading-message" ? <ChatLoadingDots /> : props.message}
      </div>
    </div>
  );
}

export default RobotMessage;
