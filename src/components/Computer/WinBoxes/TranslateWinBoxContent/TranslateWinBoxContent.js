import React, { useState } from "react";

import "./TranslateWinBoxContent.css";

import LanguageSelect from "./LanguageSelect";
import LanguageText from "./LanguageText";

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
        <div id="custom-double-arrows"></div>
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
      <div className="text">
        <p>
          compilation, which is the three-step process of transforming source
          code written by humans into a binary form of 1’s and 0’s interpretable
          by machines
        </p>
        <p>
          Steps to compile and run a program (how a program goes from a
          programmer's mind to something the computer can understand):
        </p>
        <p>
          High-level code is compiled into assembly code, which is assembled
          into object code. Many object code files are linked together into an
          executable that is loaded into memory to run.
        </p>
        <p>
          object code (also known as machine code). this is the hex here. 1 hex
          digit consists of 4 bits (the smallest unit). Those are the bits
          underlying our everyday interactions with our computers! These are the
          1's and 0's people talk about when it comes to computation! And that's
          why we say it's / computing is / computers are all just about 1's and
          0's!
        </p>
      </div>
    </div>
  );
}

export default TranslateWinBoxContent;
