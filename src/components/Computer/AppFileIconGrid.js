import "./AppFileIconGrid.css";
import AppFileIcon from "./AppFileIcon";

function AppFileIconGrid(props) {
  return (
    <div id="app-file-icon-grid">
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
