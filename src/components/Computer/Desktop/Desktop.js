import "./Desktop.css";
import React, { useRef } from "react";

import DesktopAppsFiles from "./DesktopAppsFiles";
import CustomWinBoxes from "../WinBoxes/CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const SourcesWinBoxRef = useRef();
  const TerminalWinBoxRef = useRef();
  const ErasureWinBoxRef = useRef();
  const Erasure1WinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopAppsFiles
        winBoxRefs={{
          README: READMEWinBoxRef,
          TRASH: TrashWinBoxRef,
          SOURCES: SourcesWinBoxRef,
          TERMINAL: TerminalWinBoxRef,
        }}
      />
      <CustomWinBoxes
        READMEWinBoxRef={READMEWinBoxRef}
        TrashWinBoxRef={TrashWinBoxRef}
        SourcesWinBoxRef={SourcesWinBoxRef}
        TerminalWinBoxRef={TerminalWinBoxRef}
        ErasureWinBoxRef={ErasureWinBoxRef}
        Erasure1WinBoxRef={Erasure1WinBoxRef}
      />
    </div>
  );
}

export default Desktop;
