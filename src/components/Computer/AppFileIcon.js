import { useDispatch } from "react-redux";
import { openWinBox } from "../../slices/winBoxSlice";

function AppFileIcon(props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openWinBox(props.appFileName));
    props.winBoxRef.current.focus(); // Bring to front the WinBox corresponding to the clicked app / file.
  }

  return (
    <div id="app-file-icon">
      <button onClick={handleClick}>
        <img
          src={props.icon}
          className={props.appFileName}
          alt={props.appFileName}
        />
        <p>{props.appFileName}</p>
      </button>
    </div>
  );
}

export default AppFileIcon;
