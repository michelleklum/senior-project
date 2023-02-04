import DesktopApp from "./DesktopApp";

import { README, TRASH } from "../../../winBoxes";
import trash from "../icons/Trash-47x44.svg";

function DesktopApps() {
  const apps = [
    [README, trash],
    [TRASH, trash],
  ];

  return (
    <div id="desktop-apps">
      {apps.map(([appName, iconSrc]) => (
        <DesktopApp key={appName} appName={appName} iconSrc={iconSrc} />
      ))}
    </div>
  );
}

export default DesktopApps;
