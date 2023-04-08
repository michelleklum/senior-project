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
import Erasure2WinBoxContent from "./Erasure2WinBoxContent";
import HAL9000WinBoxContent from "./HAL9000WinBoxContent";

import {
  README,
  TRASH,
  SOURCES,
  TERMINAL,
  TRANSLATION,
  DIALOGUE,
  ACKNOWLEDGMENTS,
  ERASURE,
  ERASURE1,
  ERASURE2,
  HAL9000,
} from "../../../winBoxes";
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
      noClose: false,
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
      noClose: false,
      noResize: false,
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
      headerColor: "#b5b4b4",
    },
    {
      appName: SOURCES,
      innerRef: props.SourcesWinBoxRef,
      icon: folder,
      noMin: false,
      noMax: false,
      noClose: false,
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
      noClose: false,
      noResize: false,
      width: 750,
      height: 395,
      x: 30,
      y: 200,
      children: <TerminalWinBoxContent />,
      headerColor: "#282c34",
    },
    {
      appName: TRANSLATION,
      innerRef: props.TranslateWinBoxRef,
      icon: translate,
      noMin: false,
      noMax: false,
      noClose: false,
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
      noMin: false,
      noMax: false,
      noClose: false,
      noResize: false,
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
      noMin: false,
      noMax: false,
      noClose: false,
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
      noClose: false,
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
      noClose: false,
      noResize: false,
      width: 570,
      height: 600,
      x: 600,
      y: 50,
      children: <Erasure1WinBoxContent />,
      headerColor: "white",
    },
    {
      appName: ERASURE2,
      innerRef: props.Erasure2WinBoxRef,
      noMin: false,
      noMax: false,
      noClose: false,
      noResize: false,
      width: 670,
      height: 340,
      x: 100,
      y: 5,
      children: <Erasure2WinBoxContent />,
      headerColor: "white",
    },
    {
      appName: HAL9000,
      innerRef: props.HAL9000WinBoxRef,
      noHeader: true,
      width: 275,
      height: 200,
      x: "center",
      y: "center",
      children: <HAL9000WinBoxContent appStr="HAL9000.JPG" />,
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
        />
      ))}
    </div>
  );
}

export default CustomWinBoxes;
