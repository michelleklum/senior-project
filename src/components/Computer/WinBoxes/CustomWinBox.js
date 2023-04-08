import "./CustomWinBox.css";
import WinBox from "react-winbox";

import { useSelector } from "react-redux";
import { selectWinBoxStates } from "../../../slices/winBoxSlice";
import { CLOSED } from "../../../slices/winBoxStates";

import { useDispatch } from "react-redux";
import { closeWinBox } from "../../../slices/winBoxSlice";

function CustomWinBox(props) {
  const winBoxStates = useSelector(selectWinBoxStates);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (window.location.hostname === "localhost") {
      // DEVELOPMENT MODE
      // The props.innerRef.current.state.closed check is necessary for a WinBox that begins
      // in the OPEN state, if it appears on a page rendered after a previous page.
      // Because in such a case, the WinBox will actually have been rendered on the previous page,
      // (even though we did not actually place the WinBox component on that previous page).
      // So, when the page changes from the previous page to the current page where we actually
      // placed the WinBox, the WinBox will attempt to change its state to CLOSED.
      // The props.innerRef.current.state.closed check prevents that from happening.
      if (props.innerRef.current.state.closed) {
        dispatch(closeWinBox(props.appName));
        // Window-specific onclose, returns true if it does not need the default close process.
        return true;
      }
    } else {
      // PRODUCTION MODE
      // No need for the props.innerRef.current.state.closed check.
      dispatch(closeWinBox(props.appName));
      // Window-specific onclose, returns true if it does not need the default close process.
      return true;
    }
  };

  const blackFontClassName =
    props.headerColor === "white" ? "custom-winbox-black-font" : null;

  return (
    <WinBox
      className={`custom-winbox ${blackFontClassName}`}
      ref={props.innerRef}
      hide={winBoxStates[props.appName] === CLOSED}
      onclose={handleClose}
      noHeader={props.noHeader}
      icon={props.icon}
      title={props.appName}
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      children={props.children}
      noFull={true}
      noMin={props.noMin}
      noMax={props.noMax}
      noClose={props.noClose}
      noResize={props.noResize}
      background={props.headerColor}
    ></WinBox>
  );
}

export default CustomWinBox;
