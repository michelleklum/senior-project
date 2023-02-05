import DesktopApp from "./DesktopApp";

import { README, TRASH } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";

function DesktopApps(props) {
  const apps = [
    [README, textFile],
    [TRASH, trash],
  ];

  return (
    <div id="desktop-apps">
      {apps.map(([appName, iconSrc]) => (
        <DesktopApp
          key={appName}
          appName={appName}
          iconSrc={iconSrc}
          appRef={props.appRefs[appName]}
        />
      ))}
    </div>
  );
}

export default DesktopApps;
