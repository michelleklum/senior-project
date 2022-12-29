import React, { Fragment } from "react";

import { useDispatch } from "react-redux";
import { TERMINAL } from "../../slices/pageStates";
import { changePage } from "../../slices/pageSlice";

function Computer() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Computer Page</h1>
      <button onClick={() => dispatch(changePage(TERMINAL))}>
        GO TO TERMINAL PAGE
      </button>
    </Fragment>
  );
}

export default Computer;
