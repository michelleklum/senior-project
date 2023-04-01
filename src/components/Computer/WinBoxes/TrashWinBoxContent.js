import AppFileIconGrid from "../AppFileIconGrid";

import { ERASURE, ERASURE1, ERASURE2 } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";

function TrashWinBoxContent(props) {
  const appsFiles = [
    [ERASURE, textFile],
    [ERASURE1, textFile],
    [ERASURE2, textFile],
  ];

  return (
    <div className="custom-winbox-child">
      <AppFileIconGrid
        appsFiles={appsFiles}
        winBoxRefs={{
          ERASURE: props.ErasureWinBoxRef,
          ERASURE1: props.Erasure1WinBoxRef,
          ERASURE2: props.Erasure2WinBoxRef,
        }}
      />
    </div>
  );
}

export default TrashWinBoxContent;
