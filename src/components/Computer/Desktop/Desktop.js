import "./Desktop.css";
import React, { useRef } from "react";

import DesktopAppsFiles from "./DesktopAppsFiles";
import CustomWinBoxes from "../WinBoxes/CustomWinBoxes";

function Desktop() {
  const READMEWinBoxRef = useRef();
  const TrashWinBoxRef = useRef();
  const SourcesWinBoxRef = useRef();
  const TerminalWinBoxRef = useRef();
  const CommunicationPartnersWinBoxRef = useRef();
  const TranslateWinBoxRef = useRef();
  const DialogueWinBoxRef = useRef();
  const InscriptionWinBoxRef = useRef();
  const InspirationWinBoxRef = useRef();
  const AcknowledgmentsWinBoxRef = useRef();
  const ErasureWinBoxRef = useRef();
  const Erasure1WinBoxRef = useRef();
  const Erasure2WinBoxRef = useRef();
  const HAL9000WinBoxRef = useRef();
  const CommunicationHistoryWinBoxRef = useRef();
  const PunchCardWinBoxRef = useRef();
  const TeletypeWinBoxRef = useRef();
  const TektronixWinBoxRef = useRef();

  return (
    <div id="desktop">
      <DesktopAppsFiles
        winBoxRefs={{
          README: READMEWinBoxRef,
          TRASH: TrashWinBoxRef,
          SOURCES: SourcesWinBoxRef,
          TERMINAL: TerminalWinBoxRef,
          "COMMUNICATION PARTNERS": CommunicationPartnersWinBoxRef,
          TRANSLATION: TranslateWinBoxRef,
          DIALOGUE: DialogueWinBoxRef,
          INSCRIPTION: InscriptionWinBoxRef,
          INSPIRATION: InspirationWinBoxRef,
          ACKNOWLEDGMENTS: AcknowledgmentsWinBoxRef,
        }}
      />
      <CustomWinBoxes
        READMEWinBoxRef={READMEWinBoxRef}
        TrashWinBoxRef={TrashWinBoxRef}
        SourcesWinBoxRef={SourcesWinBoxRef}
        TerminalWinBoxRef={TerminalWinBoxRef}
        CommunicationPartnersWinBoxRef={CommunicationPartnersWinBoxRef}
        TranslateWinBoxRef={TranslateWinBoxRef}
        DialogueWinBoxRef={DialogueWinBoxRef}
        InscriptionWinBoxRef={InscriptionWinBoxRef}
        InspirationWinBoxRef={InspirationWinBoxRef}
        AcknowledgmentsWinBoxRef={AcknowledgmentsWinBoxRef}
        ErasureWinBoxRef={ErasureWinBoxRef}
        Erasure1WinBoxRef={Erasure1WinBoxRef}
        Erasure2WinBoxRef={Erasure2WinBoxRef}
        HAL9000WinBoxRef={HAL9000WinBoxRef}
        CommunicationHistoryWinBoxRef={CommunicationHistoryWinBoxRef}
        PunchCardWinBoxRef={PunchCardWinBoxRef}
        TeletypeWinBoxRef={TeletypeWinBoxRef}
        TektronixWinBoxRef={TektronixWinBoxRef}
      />
    </div>
  );
}

export default Desktop;
