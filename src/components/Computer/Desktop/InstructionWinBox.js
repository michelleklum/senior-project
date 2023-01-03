import WinBox from "react-winbox";
import icon from "../icons/logo192.png";

function InstructionWinBox() {
  return (
    <WinBox
      icon={icon}
      title="instructions.txt"
      width={500}
      height={300}
      x="center"
      y={70}
      background="#b5b4b4"
    >
      <p>
        Welcome to <b>Computer World</b>!
      </p>
      <p>This site is about humans and machines.</p>
      <p>
        As you click around, please think, from time to time, about the ways in
        which you interact with the various computer interfaces on this website.
      </p>
      <p>We hope you enjoy!</p>
      <p>
        <b>TODO: UPDATE ICON</b>
      </p>
    </WinBox>
  );
}

export default InstructionWinBox;
