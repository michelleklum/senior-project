import "./InspectionWinBoxContent.css";

import React, { useState } from "react";

function InspectionWinBoxContent() {
  const [zoom, setZoom] = useState(100);

  return (
    <div id="inspection-winbox-content" className="custom-winbox-child">
      <p>
        Science fiction writer Ted Chiang likens ChatGPT to "a blurry JPEG of
        all the text on the Web," in that both technologies compress data in a
        lossy manner.
      </p>
      <p>
        From afar, things look okay. "The blurriness occurs in a way that
        doesn't make the picture as a whole look less sharp."
      </p>
      <p>
        But upon further inspection, the image becomes blurrier, more
        pixellated; cracks begin to surface...
      </p>
      <div id="inspection-img">
        <i
          id="magnifying-glass"
          className="fas fa-search-plus fa-2x"
          onClick={() => setZoom(zoom + 5)}
        ></i>
        <img
          src={require("../img/ChatGPT.jpg")}
          alt={"Device on ChatGPT Website"}
          width={zoom.toString() + "%"}
        />
      </div>
    </div>
  );
}

export default InspectionWinBoxContent;
