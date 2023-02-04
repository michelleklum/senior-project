import { TRASH } from "../../../winBoxes";

import { useSelector } from "react-redux";
import { CLOSED } from "../../../slices/winBoxStates";
import { selectWinBoxStates } from "../../../slices/winBoxSlice";

import { useDispatch } from "react-redux";
import { closeWinBox } from "../../../slices/winBoxSlice";

import WinBox from "react-winbox";
import trash from "../icons/Trash-47x44.svg";

function TrashWinBox() {
  const winBoxStates = useSelector(selectWinBoxStates);
  const dispatch = useDispatch();

  return (
    <WinBox
      hide={winBoxStates[TRASH] === CLOSED}
      onclose={() => dispatch(closeWinBox(TRASH))}
      icon={trash}
      title="Trash"
      noFull={true}
      width={500}
      height={350}
      x={700}
      y={300}
      background="#b5b4b4"
    >
      <p>TRASH</p>
    </WinBox>
  );
}

export default TrashWinBox;
