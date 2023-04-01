import "./Desktop.css";
import React, { useRef } from "react";

import DesktopAppsFiles from "./DesktopAppsFiles";
import CustomWinBoxes from "../WinBoxes/CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const SourcesWinBoxRef = useRef();
  const TerminalWinBoxRef = useRef();
  const TranslateWinBoxRef = useRef();
  const DialogueWinBoxRef = useRef();
  const AcknowledgmentsWinBoxRef = useRef();
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
          TRANSLATION: TranslateWinBoxRef,
          DIALOGUE: DialogueWinBoxRef,
          ACKNOWLEDGMENTS: AcknowledgmentsWinBoxRef,
        }}
      />
      <CustomWinBoxes
        READMEWinBoxRef={READMEWinBoxRef}
        TrashWinBoxRef={TrashWinBoxRef}
        SourcesWinBoxRef={SourcesWinBoxRef}
        TerminalWinBoxRef={TerminalWinBoxRef}
        TranslateWinBoxRef={TranslateWinBoxRef}
        DialogueWinBoxRef={DialogueWinBoxRef}
        AcknowledgmentsWinBoxRef={AcknowledgmentsWinBoxRef}
        ErasureWinBoxRef={ErasureWinBoxRef}
        Erasure1WinBoxRef={Erasure1WinBoxRef}
      />
    </div>
  );
}

export default Desktop;
