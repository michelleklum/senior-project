import "./UserMessage.css";

function UserMessage(props) {
  return (
    <div id="user-message" className="message">
      {props.message}
    </div>
  );
}

export default UserMessage;
