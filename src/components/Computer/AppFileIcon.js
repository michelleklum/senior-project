import { useDispatch } from "react-redux";
import { openWinBox } from "../../slices/winBoxSlice";

function AppFileIcon(props) {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(openWinBox(props.appFileName));

    // Ensure that the click does not propagate to parent WinBox component
    // when the app / file clicked is inside a WinBox component.
    // Because if the click propagates to the parent, both the parent WinBox component
    // and the WinBox component for the clicked app / file will have
    // their z-index incremented by 1, meaning the parent WinBox component will oddly
    // remain in front of the WinBox component for the clicked app / file.
    e.stopPropagation();
    // Bring to front the WinBox corresponding to the clicked app / file.
    props.winBoxRef.current.focus();
  }

  return (
    <button className="grid-icon" onClick={handleClick}>
      <img
        src={props.icon}
        className={props.appFileName}
        alt={props.appFileName}
      />
      <p>
        {props.appFileName.length > 11
          ? props.appFileName.slice(0, 7) + "..."
          : props.appFileName}
      </p>
    </button>
  );
}

export default AppFileIcon;
