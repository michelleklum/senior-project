import SourcesInspoGrid from "./SourcesInspoGrid/SourcesInspoGrid";

import book from "../icons/Book-47x44.svg";
import linkEarthMouse from "../icons/LinkEarthMouse-47x44.svg";

function SourcesWinBoxContent() {
  const sources = [
    [
      "ARTIFICIAL COMMUNICATION",
      book,
      "https://direct.mit.edu/books/book/5338/Artificial-CommunicationHow-Algorithms-Produce",
    ],
    [
      "BING'S A.I...  ALIVE. 😈.'",
      linkEarthMouse,
      "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-transcript.html",
    ],
    ["CHATGPT... DIALOGUE", linkEarthMouse, "https://openai.com/blog/chatgpt/"],
    [
      "CHATGPT...JPEG OF THE WEB",
      linkEarthMouse,
      "https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web",
    ],
    [
      "IN 1858... THE TRUTH'",
      linkEarthMouse,
      "https://www.theatlantic.com/technology/archive/2014/07/in-1858-people-said-the-telegraph-was-too-fast-for-the-truth/375171/",
    ],
    [
      "IN THE BEG...ND LINE",
      book,
      "https://www.nealstephenson.com/in-the-beginning-was-the-command-line.html",
    ],
    ["MECHANISMS", book, "https://mitpress.mit.edu/9780262517409/mechanisms/"],
    ["PLAIN TEXT", book, "https://www.sup.org/books/title/?id=26821"],
    ["SCROLLING ...AGE", book, "http://www.davidmlevy.net/scrolling-forward/"],
    [
      "THE CRE... REGULATED",
      linkEarthMouse,
      "https://time.com/6252404/mira-murati-chatgpt-openai-interview/",
    ],
    [
      "THE ESSENTIAL TURING",
      book,
      "https://www.proquest.com/docview/215738582",
    ],
    ["THE MET... REALITY", book, "https://academic.oup.com/book/3660"],
    [
      "WEB 101 ...THE GUI",
      linkEarthMouse,
      "https://www.wired.com/1997/12/web-101-a-history-of-the-gui/",
    ],
    [
      "WHY DO A.I. ...MIRROR.",
      linkEarthMouse,
      "https://www.nytimes.com/2023/02/26/technology/ai-chatbot-information-truth.html",
    ],
  ];

  return <SourcesInspoGrid type="sources" links={sources} />;
}

export default SourcesWinBoxContent;
