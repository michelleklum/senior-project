import React, { useRef } from "react";

import DesktopAppsFiles from "./DesktopAppsFiles";
import CustomWinBoxes from "../WinBoxes/CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const FolderWinBoxRef = useRef();
  const ErasureWinBoxRef = useRef();
  const Erasure1WinBoxRef = useRef();

  return (
    <div>
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
        ErasureWinBoxRef={ErasureWinBoxRef}
        Erasure1WinBoxRef={Erasure1WinBoxRef}
      />
    </div>
  );
}

export default Desktop;
