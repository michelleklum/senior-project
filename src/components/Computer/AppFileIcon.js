import { useDispatch } from "react-redux";
import { openWinBox } from "../../slices/winBoxSlice";

function AppFileIcon(props) {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(openWinBox(props.appFileName));

    // Ensure that click doesn't propagate to parent WinBox component
    // when the app / file clicked is inside a WinBox component.
    // Because if the click propagates to the parent, both the parent WinBox component
    // and the WinBox component for the clicked app / file will have
    // their z-index incremented by 1, meaning the parent WinBox component will strangely
    // remain in front of the WinBox component for the clicked app / file.
    e.stopPropagation();
    // Bring to front the WinBox corresponding to the clicked app / file.
    props.winBoxRef.current.focus();
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
