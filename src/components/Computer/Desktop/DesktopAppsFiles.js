import AppFileIconGrid from "../AppFileIconGrid";

import {
  README,
  TRASH,
  SOURCES,
  TERMINAL,
  TRANSLATION,
  DIALOGUE,
  INSCRIPTION,
  INSPIRATION,
  ACKNOWLEDGMENTS,
} from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-47x44.svg";
import terminal from "../icons/Terminal-47x44.svg";
import translate from "../icons/Translate-47x44.svg";
import chat from "../icons/Chat-47x44.svg";
import memo from "../icons/Memo-47x44.svg";

export const DESKTOP_APPS_FILES = [
  [README, textFile],
  [TERMINAL, terminal],
  [TRANSLATION, translate],
  [DIALOGUE, chat],
  [INSCRIPTION, memo],
  [TRASH, trash],
  [SOURCES, folder],
  [INSPIRATION, folder],
  [ACKNOWLEDGMENTS, textFile],
];

function DesktopAppsFiles(props) {
  return (
    <AppFileIconGrid
      type="desktop"
      appsFiles={DESKTOP_APPS_FILES}
      winBoxRefs={props.winBoxRefs}
    />
  );
}

export default DesktopAppsFiles;
