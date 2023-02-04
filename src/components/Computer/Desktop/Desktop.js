import "./Desktop.css";
import DesktopApps from "./DesktopApps";
import READMEWinBox from "./READMEWinBox";
import TrashWinBox from "./TrashWinBox";

function Desktop() {
  return (
    <div id="desktop">
      <DesktopApps />
      <READMEWinBox />
      <TrashWinBox />
    </div>
  );
}

export default Desktop;
