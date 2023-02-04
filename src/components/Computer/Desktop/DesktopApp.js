import { useDispatch } from "react-redux";
import { openWinBox } from "../../../slices/winBoxSlice";

function DesktopApp(props) {
  const dispatch = useDispatch();

  return (
    <div id="desktop-app">
      <button onClick={() => dispatch(openWinBox(props.appName))}>
        <img
          src={props.iconSrc}
          className={props.appName}
          alt={props.appName}
        />
        <p>{props.appName}</p>
      </button>
    </div>
  );
}

export default DesktopApp;
