import AppFileIconGrid from "../AppFileIconGrid";

import {
  README,
  TRASH,
  SOURCES,
  TERMINAL,
  TRANSLATE,
  DIALOGUE,
  ACKNOWLEDGMENTS,
} from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-47x44.svg";
import terminal from "../icons/Terminal-47x44.svg";
import translate from "../icons/Translate-47x44.svg";
import chat from "../icons/Chat-47x44.svg";

function DesktopAppsFiles(props) {
  const appsFiles = [
    [README, textFile],
    [TRASH, trash],
    [SOURCES, folder],
    [TERMINAL, terminal],
    [TRANSLATE, translate],
    [DIALOGUE, chat],
    [ACKNOWLEDGMENTS, textFile],
  ];

  return (
    <AppFileIconGrid appsFiles={appsFiles} winBoxRefs={props.winBoxRefs} />
  );
}

export default DesktopAppsFiles;
