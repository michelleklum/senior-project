import React, { useRef } from "react";

import DesktopAppsFiles from "./DesktopAppsFiles";
import CustomWinBoxes from "../WinBoxes/CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const FolderWinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopAppsFiles
        winBoxRefs={{
          README: READMEWinBoxRef,
          TRASH: TrashWinBoxRef,
          FOLDER: FolderWinBoxRef,
        }}
      />
      <CustomWinBoxes
        READMEWinBoxRef={READMEWinBoxRef}
        TrashWinBoxRef={TrashWinBoxRef}
        FolderWinBoxRef={FolderWinBoxRef}
      />
    </div>
  );
}

export default Desktop;
