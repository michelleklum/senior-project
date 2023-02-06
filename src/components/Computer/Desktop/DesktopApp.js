import { useDispatch } from "react-redux";
import { openWinBox } from "../../../slices/winBoxSlice";

function DesktopApp(props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openWinBox(props.appName));
    props.winBoxRef.current.focus(); // Bring to front the WinBox corresponding to the clicked app.
  }

  return (
    <div id="desktop-app">
      <button onClick={handleClick}>
        <img src={props.icon} className={props.appName} alt={props.appName} />
        <p>{props.appName}</p>
      </button>
    </div>
  );
}

export default DesktopApp;
