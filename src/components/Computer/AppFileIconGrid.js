import "./AppFileIconGrid.css";
import AppFileIcon from "./AppFileIcon";

function AppFileIconGrid(props) {
  return (
    <div
      className="grid app-file-icon-grid"
      id={props.type === "desktop" ? "desktop-grid" : "trash-winbox-grid"}
    >
      {props.appsFiles.map(([appFileName, icon]) => (
        <AppFileIcon
          key={appFileName}
          appFileName={appFileName}
          icon={icon}
          winBoxRef={props.winBoxRefs[appFileName]}
        />
      ))}
    </div>
  );
}

export default AppFileIconGrid;
