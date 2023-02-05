import React, { useRef } from "react";

import "./Desktop.css";
import DesktopApps from "./DesktopApps";
import CustomWinBoxes from "./CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopApps
        appRefs={{ README: READMEWinBoxRef, TRASH: TrashWinBoxRef }}
      />
      <CustomWinBoxes
        READMEWinBoxRef={READMEWinBoxRef}
        TrashWinBoxRef={TrashWinBoxRef}
      />
    </div>
  );
}

export default Desktop;
