import React, { useRef } from "react";

import "./Desktop.css";
import DesktopApps from "./DesktopApps";
import CustomWinBoxes from "./CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const FolderWinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopApps
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
