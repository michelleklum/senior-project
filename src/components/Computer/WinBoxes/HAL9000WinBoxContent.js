import "./HAL9000WinBoxContent.css";

import { useDispatch } from "react-redux";
import { closeWinBox } from "../../../slices/winBoxSlice";

import warning from "../icons/Warning-47x44.svg";

function HAL9000WinBoxContent(props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closeWinBox(props.appStr));
  }

  return (
    <div id="hal-9000-winbox-content" className="custom-winbox-child">
      <img src={warning} alt="Warning Icon" />
      <p>Photo can't be opened because it's in the Trash.</p>
      <button className="ok-button" onClick={handleClick}>
        <p>OK</p>
      </button>
    </div>
  );
}

export default HAL9000WinBoxContent;
