import RobotIconMessage from "./RobotIconMessage";

function RobotMessage(props) {
  return <RobotIconMessage type="loaded-message" message={props.message} />;
}

export default RobotMessage;
