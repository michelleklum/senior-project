import React, { useRef } from "react";

import { README } from "../../../winBoxes";

import { useSelector } from "react-redux";
import { CLOSED } from "../../../slices/winBoxStates";
import { selectWinBoxStates } from "../../../slices/winBoxSlice";

import { useDispatch } from "react-redux";
import { closeWinBox } from "../../../slices/winBoxSlice";

import WinBox from "react-winbox";
import textFile from "../icons/TextFile-47x44.svg";

function READMEWinBox() {
  const READMEWinBoxRef = useRef();

  const winBoxStates = useSelector(selectWinBoxStates);
  const dispatch = useDispatch();

  return (
    <WinBox
      ref={READMEWinBoxRef}
      hide={winBoxStates[README] === CLOSED}
      onclose={() =>
        READMEWinBoxRef.current.isClosed() && dispatch(closeWinBox(README))
      }
      icon={textFile}
      title="README"
      noFull={true}
      width={500}
      height={300}
      x="center"
      y={70}
      background="#b5b4b4"
    >
      <p>
        Welcome to <b>Computer World</b>!
      </p>
      <p>This site is about humans and machines.</p>
      <p>
        As you click around, please think, from time to time, about the ways in
        which you interact with the various computer interfaces on this website.
      </p>
      <p>We hope you enjoy!</p>
      <p>
        <b>TODO: UPDATE ICON</b>
      </p>
    </WinBox>
  );
}

export default READMEWinBox;
