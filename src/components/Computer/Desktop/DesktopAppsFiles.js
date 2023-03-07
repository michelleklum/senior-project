import AppFileIconGrid from "../AppFileIconGrid";

import { README, TRASH, FOLDER } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-42x30.svg";

function DesktopAppsFiles(props) {
  const appsFiles = [
    [README, textFile],
    [TRASH, trash],
    [FOLDER, folder],
  ];

  return (
    <AppFileIconGrid appsFiles={appsFiles} winBoxRefs={props.winBoxRefs} />
  );
}

export default DesktopAppsFiles;
