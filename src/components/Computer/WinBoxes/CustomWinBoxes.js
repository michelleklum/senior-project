import CustomWinBox from "./CustomWinBox";
import READMEWinBoxContent from "./READMEWinBoxContent";
import TrashWinBoxContent from "./TrashWinBoxContent/TrashWinBoxContent";
import SourcesWinBoxContent from "./SourcesWinBoxContent";
import TerminalWinBoxContent from "./TerminalWinBoxContent/TerminalWinBoxContent";
import CommunicationPartnersWinBoxContent from "./CommunicationPartnersWinBoxContent/CommunicationPartnersWinBoxContent";
import TranslateWinBoxContent from "./TranslateWinBoxContent/TranslateWinBoxContent";
import InspectionWinBoxContent from "./InspectionWinBoxContent";
import DialogueWinBoxContent from "./DialogueWinBoxContent/DialogueWinBoxContent";
import InscriptionWinBoxContent from "./InscriptionWinBoxContent/InscriptionWinBoxContent";
import InspirationWinBoxContent from "./InspirationWinBoxContent";
import AcknowledgmentsWinBoxContent from "./AcknowledgmentsWinBoxContent";
import ErasureWinBoxContent from "./TrashWinBoxContent/ErasureWinBoxContent";
import Erasure1WinBoxContent from "./TrashWinBoxContent/Erasure1WinBoxContent";
import Erasure2WinBoxContent from "./TrashWinBoxContent/Erasure2WinBoxContent";
import CommunicationHistoryWinBoxContent from "./CommunicationPartnersWinBoxContent/CommunicationHistoryWinBoxContent";
import HAL9000WinBoxContent from "./TrashWinBoxContent/HAL9000WinBoxContent";
import PunchCardWinBoxContent from "./CommunicationPartnersWinBoxContent/PunchCardWinBoxContent";
import TeletypeWinBoxContent from "./CommunicationPartnersWinBoxContent/TeletypeWinBoxContent";
import IBM2260WinBoxContent from "./CommunicationPartnersWinBoxContent/IBM2260WinBoxContent";
import TektronixWinBoxContent from "./CommunicationPartnersWinBoxContent/TektronixWinBoxContent";
import CommandLineInterfaceWinBoxContent from "./CommunicationPartnersWinBoxContent/CommandLineInterfaceWinBoxContent";

import {
  README,
  TRASH,
  SOURCES,
  TERMINAL,
  COMMUNICATION_PARTNERS,
  TRANSLATION,
  INSPECTION,
  DIALOGUE,
  INSCRIPTION,
  INSPIRATION,
  ACKNOWLEDGMENTS,
  ERASURE,
  ERASURE1,
  ERASURE2,
  HAL9000,
  COMMUNICATION_HISTORY,
  PUNCH_CARD,
  TELETYPE,
  IBM2260,
  TEKTRONIX,
  COMMAND_LINE_INTERFACE,
} from "../../../winBoxes";
import terminal from "../icons/Terminal-47x44.svg";
import translate from "../icons/Translate-47x44.svg";

function CustomWinBoxes(props) {
  const winBoxes = [
    {
      appName: README,
      innerRef: props.READMEWinBoxRef,
      width: 550,
      height: 602,
      x: "center",
      y: 185,
      children: <READMEWinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: TRASH,
      innerRef: props.TrashWinBoxRef,
      width: 500,
      height: 350,
      x: 700,
      y: 300,
      children: (
        <TrashWinBoxContent
          ErasureWinBoxRef={props.ErasureWinBoxRef}
          Erasure1WinBoxRef={props.Erasure1WinBoxRef}
          Erasure2WinBoxRef={props.Erasure2WinBoxRef}
          HAL9000WinBoxRef={props.HAL9000WinBoxRef}
        />
      ),
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: SOURCES,
      innerRef: props.SourcesWinBoxRef,
      width: 470,
      height: 330,
      x: 800,
      y: 145,
      children: <SourcesWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: TERMINAL,
      innerRef: props.TerminalWinBoxRef,
      icon: terminal,
      width: 750,
      height: 395,
      x: 30,
      y: 200,
      children: <TerminalWinBoxContent />,
      headerColor: "#282c34",
    },
    {
      appName: COMMUNICATION_PARTNERS,
      innerRef: props.CommunicationPartnersWinBoxRef,
      width: 470,
      height: 330,
      x: 275,
      y: 67,
      children: (
        <CommunicationPartnersWinBoxContent
          CommunicationHistoryWinBoxRef={props.CommunicationHistoryWinBoxRef}
          PunchCardWinBoxRef={props.PunchCardWinBoxRef}
          TeletypeWinBoxRef={props.TeletypeWinBoxRef}
          IBM2260WinBoxRef={props.IBM2260WinBoxRef}
          TektronixWinBoxRef={props.TektronixWinBoxRef}
          CommandLineInterfaceWinBoxRef={props.CommandLineInterfaceWinBoxRef}
        />
      ),
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: TRANSLATION,
      innerRef: props.TranslateWinBoxRef,
      icon: translate,
      width: 700,
      height: 510,
      x: 780,
      y: 110,
      children: <TranslateWinBoxContent />,
      headerColor: "#6daffe",
    },
    {
      appName: INSPECTION,
      innerRef: props.InspectionWinBoxRef,
      width: 600,
      height: 600,
      x: 880,
      y: 160,
      children: <InspectionWinBoxContent />,
      headerColor: "#4a4aa0",
      headerFontColor: "white",
    },
    {
      appName: DIALOGUE,
      innerRef: props.DialogueWinBoxRef,
      width: 400,
      height: 600,
      x: "right",
      y: "bottom",
      children: <DialogueWinBoxContent />,
      headerColor: "#6daffe",
    },
    {
      appName: INSCRIPTION,
      innerRef: props.InscriptionWinBoxRef,
      width: 800,
      height: 600,
      x: 80,
      y: 30,
      children: <InscriptionWinBoxContent />,
      headerColor: "#317873",
    },
    {
      appName: INSPIRATION,
      innerRef: props.InspirationWinBoxRef,
      width: 470,
      height: 330,
      x: 50,
      y: 212,
      children: <InspirationWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: ACKNOWLEDGMENTS,
      innerRef: props.AcknowledgmentsWinBoxRef,
      width: 620,
      height: 705,
      x: 600,
      y: 110,
      children: <AcknowledgmentsWinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: ERASURE,
      innerRef: props.ErasureWinBoxRef,
      width: 500,
      height: 400,
      x: 170,
      y: 60,
      children: <ErasureWinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: ERASURE1,
      innerRef: props.Erasure1WinBoxRef,
      width: 570,
      height: 578,
      x: 600,
      y: 250,
      children: <Erasure1WinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: ERASURE2,
      innerRef: props.Erasure2WinBoxRef,
      width: 670,
      height: 340,
      x: 100,
      y: 5,
      children: <Erasure2WinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: HAL9000,
      innerRef: props.HAL9000WinBoxRef,
      noHeader: true,
      width: 275,
      height: 200,
      x: "center",
      y: 340,
      children: <HAL9000WinBoxContent appStr="HAL9000.JPG" />,
    },
    {
      appName: COMMUNICATION_HISTORY,
      innerRef: props.CommunicationHistoryWinBoxRef,
      width: 530,
      height: 242,
      x: 500,
      y: 350,
      children: <CommunicationHistoryWinBoxContent />,
      headerColor: "white",
      headerFontColor: "dark",
    },
    {
      appName: PUNCH_CARD,
      innerRef: props.PunchCardWinBoxRef,
      width: 550,
      height: 503,
      x: 170,
      y: 175,
      children: <PunchCardWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: TELETYPE,
      innerRef: props.TeletypeWinBoxRef,
      width: 500,
      height: 680,
      x: 550,
      y: 100,
      children: <TeletypeWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: IBM2260,
      innerRef: props.IBM2260WinBoxRef,
      width: 480,
      height: 530,
      x: 60,
      y: 300,
      children: <IBM2260WinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: TEKTRONIX,
      innerRef: props.TektronixWinBoxRef,
      width: 495,
      height: 660,
      x: "center",
      y: 80,
      children: <TektronixWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
    {
      appName: COMMAND_LINE_INTERFACE,
      innerRef: props.CommandLineInterfaceWinBoxRef,
      width: 510,
      height: 480,
      x: 920,
      y: 150,
      children: <CommandLineInterfaceWinBoxContent />,
      headerColor: "#e6e6e6",
      headerFontColor: "dark",
    },
  ];

  return (
    <div>
      {winBoxes.map((winBox) => (
        <CustomWinBox
          key={winBox.appName}
          innerRef={winBox.innerRef}
          appName={winBox.appName}
          noHeader={winBox.noHeader}
          icon={winBox.icon}
          noMin={winBox.noMin}
          noMax={winBox.noMax}
          noClose={winBox.noClose}
          noResize={winBox.noResize}
          width={winBox.width}
          height={winBox.height}
          x={winBox.x}
          y={winBox.y}
          children={winBox.children}
          headerColor={winBox.headerColor}
          headerFontColor={winBox.headerFontColor}
        />
      ))}
    </div>
  );
}

export default CustomWinBoxes;
