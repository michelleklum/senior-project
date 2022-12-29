import React, { Fragment } from "react";

import { useDispatch } from "react-redux";
import { COMPUTER } from "../../slices/pageStates";
import { changePage } from "../../slices/pageSlice";

function Terminal() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Terminal Page</h1>
      <button onClick={() => dispatch(changePage(COMPUTER))}>
        GO TO COMPUTER PAGE
      </button>
    </Fragment>
  );
}

export default Terminal;
