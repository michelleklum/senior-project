// Bouncing dots displayed when waiting for chatbot response.
import "./ChatLoadingDots.css";

function ChatLoadingDots() {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}

export default ChatLoadingDots;
