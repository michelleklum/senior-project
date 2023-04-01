import CustomWinBox from "./CustomWinBox";
import READMEWinBoxContent from "./READMEWinBoxContent";
import TrashWinBoxContent from "./TrashWinBoxContent";
import SourcesWinBoxContent from "./SourcesWinBoxContent/SourcesWinBoxContent";
import TerminalWinBoxContent from "./TerminalWinBoxContent/TerminalWinBoxContent";
import TranslateWinBoxContent from "./TranslateWinBoxContent/TranslateWinBoxContent";
import DialogueWinBoxContent from "./DialogueWinBoxContent/DialogueWinBoxContent";
import AcknowledgmentsWinBoxContent from "./AcknowledgmentsWinBoxContent";
import ErasureWinBoxContent from "./ErasureWinBoxContent";
import Erasure1WinBoxContent from "./Erasure1WinBoxContent";

import {
  README,
  TRASH,
  SOURCES,
  TERMINAL,
  TRANSLATE,
  DIALOGUE,
  ACKNOWLEDGMENTS,
  ERASURE,
  ERASURE1,
} from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-47x44.svg";
import terminal from "../icons/Terminal-47x44.svg";
import translate from "../icons/Translate-47x44.svg";

function CustomWinBoxes(props) {
  const winBoxes = [
    {
      appName: README,
      innerRef: props.READMEWinBoxRef,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 550,
      height: 600,
      x: "center",
      y: 30,
      children: <READMEWinBoxContent />,
      headerColor: "white",
    },
    {
      appName: TRASH,
      innerRef: props.TrashWinBoxRef,
      icon: trash,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 500,
      height: 350,
      x: 700,
      y: 300,
      children: (
        <TrashWinBoxContent
          ErasureWinBoxRef={props.ErasureWinBoxRef}
          Erasure1WinBoxRef={props.Erasure1WinBoxRef}
        />
      ),
      headerColor: "#b5b4b4",
    },
    {
      appName: SOURCES,
      innerRef: props.SourcesWinBoxRef,
      icon: folder,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 470,
      height: 330,
      x: 800,
      y: 145,
      children: <SourcesWinBoxContent />,
      headerColor: "#b5b4b4",
    },
    {
      appName: TERMINAL,
      innerRef: props.TerminalWinBoxRef,
      icon: terminal,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 750,
      height: 395,
      x: 30,
      y: 200,
      children: <TerminalWinBoxContent />,
      headerColor: "#b5b4b4",
    },
    {
      appName: TRANSLATE,
      innerRef: props.TranslateWinBoxRef,
      icon: translate,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 700,
      height: 550,
      x: 120,
      y: 42,
      children: <TranslateWinBoxContent />,
      headerColor: "#b5b4b4",
    },
    {
      appName: DIALOGUE,
      innerRef: props.DialogueWinBoxRef,
      noMin: true,
      noMax: true,
      noResize: true,
      width: 400,
      height: 600,
      x: "right",
      y: "bottom",
      children: <DialogueWinBoxContent />,
      headerColor: "#6daffe",
    },
    {
      appName: ACKNOWLEDGMENTS,
      innerRef: props.AcknowledgmentsWinBoxRef,
      icon: textFile,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 620,
      height: 640,
      x: 600,
      y: 10,
      children: <AcknowledgmentsWinBoxContent />,
      headerColor: "white",
    },
    {
      appName: ERASURE,
      innerRef: props.ErasureWinBoxRef,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 500,
      height: 400,
      x: 170,
      y: 60,
      children: <ErasureWinBoxContent />,
      headerColor: "white",
    },
    {
      appName: ERASURE1,
      innerRef: props.Erasure1WinBoxRef,
      noMin: false,
      noMax: false,
      noResize: false,
      width: 570,
      height: 600,
      x: 600,
      y: 50,
      children: <Erasure1WinBoxContent />,
      headerColor: "white",
    },
  ];

  return (
    <div>
      {winBoxes.map((winBox) => (
        <CustomWinBox
          key={winBox.appName}
          innerRef={winBox.innerRef}
          appName={winBox.appName}
          icon={winBox.icon}
          noMin={winBox.noMin}
          noMax={winBox.noMax}
          noResize={winBox.noResize}
          width={winBox.width}
          height={winBox.height}
          x={winBox.x}
          y={winBox.y}
          children={winBox.children}
          headerColor={winBox.headerColor}
        />
      ))}
    </div>
  );
}

export default CustomWinBoxes;
