import JPGWinBoxContent from "./JPGWinBoxContent";

function IBM2260WinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/IBM2260.jpeg")}
      alt={"IBM 2260"}
      caption={
        "The IBM 2260 was a text-only cathode-ray tube video terminal.\n\nIts 1964 release marked a significant milestone in the development of video display units, which convey information on-screen (how we interact with our computers today!), rather than by printing text to paper like teletypes."
      }
    />
  );
}

export default IBM2260WinBoxContent;
