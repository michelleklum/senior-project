import CustomWinBox from "./CustomWinBox";
import READMEWinBoxContent from "./READMEWinBoxContent";
import TrashWinBoxContent from "./TrashWinBoxContent";
import FolderWinBoxContent from "./FolderWinBoxContent";
import ErasureWinBoxContent from "./ErasureWinBoxContent";
import Erasure1WinBoxContent from "./Erasure1WinBoxContent";

import { README, TRASH, FOLDER, ERASURE, ERASURE1 } from "../../../winBoxes";
import textFile from "../icons/TextFile-47x44.svg";
import trash from "../icons/Trash-47x44.svg";
import folder from "../icons/Folder-42x30.svg";

function CustomWinBoxes(props) {
  const winBoxes = [
    {
      appName: README,
      innerRef: props.READMEWinBoxRef,
      icon: textFile,
      width: 500,
      height: 300,
      x: "center",
      y: 70,
      children: <READMEWinBoxContent />,
      headerColor: "#b5b4b4",
    },
    {
      appName: TRASH,
      innerRef: props.TrashWinBoxRef,
      icon: trash,
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
      appName: FOLDER,
      innerRef: props.FolderWinBoxRef,
      icon: folder,
      width: 500,
      height: 350,
      x: 30,
      y: 250,
      children: <FolderWinBoxContent />,
      headerColor: "#b5b4b4",
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
    },
    {
      appName: ERASURE1,
      innerRef: props.Erasure1WinBoxRef,
      width: 500,
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
