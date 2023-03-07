import AppFileIconGrid from "../AppFileIconGrid";

import { ERASURE } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";

function TrashWinBoxContent(props) {
  const appsFiles = [[ERASURE, textFile]];

  return (
    <div>
      <AppFileIconGrid
        appsFiles={appsFiles}
        winBoxRefs={{ ERASURE: props.ErasureWinBoxRef }}
      />
    </div>
  );
}

export default TrashWinBoxContent;
