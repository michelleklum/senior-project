import DesktopApp from "./DesktopApp";

import trash from "../icons/Trash-47x44.svg";

function DesktopApps() {
  const apps = [
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
    ["Trash", trash],
  ];

  return (
    <div id="desktop-apps">
      {apps.map(([appName, iconSrc]) => (
        <DesktopApp
          key={appName.toLowerCase()}
          appName={appName}
          className={appName.toLowerCase()}
          iconSrc={iconSrc}
        />
      ))}
    </div>
  );
}

export default DesktopApps;
