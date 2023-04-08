import SourcesInspoGrid from "./SourcesInspoGrid/SourcesInspoGrid";

import linkEarthMouse from "../icons/LinkEarthMouse-47x44.svg";

function InspirationWinBoxContent() {
  const inspiration = [
    ["GLASS ANIMALS", linkEarthMouse, "https://opensource.glassanimals.com/"],
    ["WINDOWS 93", linkEarthMouse, "http://www.windows93.net/"],
    ["M4TT72", linkEarthMouse, "https://term.m4tt72.com/"],
    ["QUENTIN.XYZ", linkEarthMouse, "https://www.quentin.xyz/"],
    ["FELDMAN", linkEarthMouse, "https://craigfeldman.com/"],
    [
      "CMD.FM",
      linkEarthMouse,
      "https://chrome.google.com/webstore/detail/cmdfm/ndchnplkbnepbhkajiceniicmdehkkhm?hl=en",
    ],
  ];

  return <SourcesInspoGrid type="inspo" links={inspiration} />;
}

export default InspirationWinBoxContent;
