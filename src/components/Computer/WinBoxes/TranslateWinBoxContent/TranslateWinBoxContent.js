import React, { useState } from "react";

import "./TranslateWinBoxContent.css";

import LanguageSelect from "./LanguageSelect";
import LanguageText from "./LanguageText";
import Explanation from "./Explanation";

function TranslateWinBoxContent() {
  const [leftLang, setLeftLang] = useState("Programmer's Vision");
  const [rightLang, setRightLang] = useState("High-Level Code");

  return (
    <div className="custom-winbox-child">
      <div id="language-select-row">
        <LanguageSelect
          lang={leftLang}
          setLang={setLeftLang}
          otherLang={rightLang}
        />
        <i
          id="language-select-double-arrows"
          className="fas fa-exchange-alt"
        ></i>
        <LanguageSelect
          lang={rightLang}
          setLang={setRightLang}
          otherLang={leftLang}
        />
      </div>
      <div id="language-text-row">
        <LanguageText lang={leftLang} />
        <LanguageText lang={rightLang} />
      </div>
      <Explanation />
    </div>
  );
}

export default TranslateWinBoxContent;
