import WinBox from "react-winbox";

import { useSelector } from "react-redux";
import { selectWinBoxStates } from "../../../slices/winBoxSlice";
import { CLOSED } from "../../../slices/winBoxStates";

import { useDispatch } from "react-redux";
import { closeWinBox } from "../../../slices/winBoxSlice";

function CustomWinBox(props) {
  const winBoxStates = useSelector(selectWinBoxStates);
  const dispatch = useDispatch();

  const handleClose = (force, appName) => {
    // props.innerRef.current.state.closed is necessary for a WinBox that begins in the OPEN state,
    // if it appears on a page rendered after a previous page.
    // Because in such a case, the WinBox will actually have been rendered on the previous page,
    // (even though we did not actually place the WinBox component on that previous page).
    // So, when the page changes from the previous page to the current page where we actually
    // placed the WinBox, the WinBox will attempt to change its state to CLOSED.
    // The props.innerRef.current.state.closed part prevents that from happening.
    console.log("CustomWinBox props.innerRef.current", props.innerRef.current);
    if (props.innerRef.current.state.closed) {
      dispatch(closeWinBox(appName));
      // Window-specific onclose, returns true if it does not need the default close process.
      return true;
    }
  };

  return (
    <WinBox
      ref={props.innerRef}
      hide={winBoxStates[props.appName] === CLOSED}
      onclose={(force) => handleClose(force, props.appName)}
      icon={props.icon}
      title={props.appName}
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      children={props.children}
      noFull={true}
      background="#b5b4b4"
    ></WinBox>
  );
}

export default CustomWinBox;
