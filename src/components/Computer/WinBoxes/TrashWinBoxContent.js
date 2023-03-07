import AppFileIconGrid from "../AppFileIconGrid";

import { ERASURE, ERASURE1 } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";

function TrashWinBoxContent(props) {
  const appsFiles = [
    [ERASURE, textFile],
    [ERASURE1, textFile],
  ];

  return (
    <div>
      <AppFileIconGrid
        appsFiles={appsFiles}
        winBoxRefs={{
          ERASURE: props.ErasureWinBoxRef,
          ERASURE1: props.Erasure1WinBoxRef,
        }}
      />
    </div>
  );
}

export default TrashWinBoxContent;
