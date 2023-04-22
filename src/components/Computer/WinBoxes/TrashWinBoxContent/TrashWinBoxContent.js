import AppFileIconGrid from "../../AppFileIconGrid";

import { ERASURE, ERASURE1, ERASURE2, HAL9000 } from "../../../../winBoxes";
import textFile from "../../icons/TextFile-47x44.svg";
import jpg from "../../icons/JPG-47x44.svg";

function TrashWinBoxContent(props) {
  const appsFiles = [
    [ERASURE, textFile],
    [ERASURE1, textFile],
    [ERASURE2, textFile],
    [HAL9000, jpg],
  ];

  return (
    <div className="custom-winbox-child">
      <AppFileIconGrid
        type="other"
        appsFiles={appsFiles}
        winBoxRefs={{
          ERASURE: props.ErasureWinBoxRef,
          ERASURE1: props.Erasure1WinBoxRef,
          ERASURE2: props.Erasure2WinBoxRef,
          "HAL9000.JPG": props.HAL9000WinBoxRef,
        }}
      />
    </div>
  );
}

export default TrashWinBoxContent;
