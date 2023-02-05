import React, { useRef } from "react";

import "./Desktop.css";
import DesktopApps from "./DesktopApps";

import READMEWinBox from "./READMEWinBox";
import TrashWinBox from "./TrashWinBox";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopApps
        appRefs={{ README: READMEWinBoxRef, TRASH: TrashWinBoxRef }}
      />
      <READMEWinBox innerRef={READMEWinBoxRef} />
      <TrashWinBox innerRef={TrashWinBoxRef} />
    </div>
  );
}

export default Desktop;
