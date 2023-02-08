import DesktopApp from "./DesktopApp";

import { README, TRASH, FOLDER } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-42x30.svg";

function DesktopApps(props) {
  const apps = [
    [README, textFile],
    [TRASH, trash],
    [FOLDER, folder],
  ];

  return (
    <div id="desktop-apps">
      {apps.map(([appName, icon]) => (
        <DesktopApp
          key={appName}
          appName={appName}
          icon={icon}
          winBoxRef={props.winBoxRefs[appName]}
        />
      ))}
    </div>
  );
}

export default DesktopApps;
