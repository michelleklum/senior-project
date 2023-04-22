import AppFileIconGrid from "../../AppFileIconGrid";

import {
  COMMUNICATION_HISTORY,
  PUNCH_CARD,
  TELETYPE,
  TEKTRONIX,
} from "../../../../winBoxes";
import textFile from "../../icons/TextFile-47x44.svg";
import jpg from "../../icons/JPG-47x44.svg";

function CommunicationPartnersWinBoxContent(props) {
  const appsFiles = [
    [COMMUNICATION_HISTORY, textFile],
    [PUNCH_CARD, jpg],
    [TELETYPE, jpg],
    [TEKTRONIX, jpg],
  ];

  return (
    <div className="custom-winbox-child">
      <AppFileIconGrid
        type="other"
        appsFiles={appsFiles}
        winBoxRefs={{
          "A HISTORY OF COMMUNICATION": props.CommunicationHistoryWinBoxRef,
          "PUNCHCARD.JPG": props.PunchCardWinBoxRef,
          "TELETYPE.JPG": props.TeletypeWinBoxRef,
          "TEKTRONIX.JPG": props.TektronixWinBoxRef,
        }}
      />
    </div>
  );
}

export default CommunicationPartnersWinBoxContent;
