import JPGWinBoxContent from "./JPGWinBoxContent";

function TektronixWinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/Tektronix4051AdApril1976.jpeg")}
      alt={"Tektronix 4051 Ad April 1976"}
      caption={
        "The Tektronix 4050 series was a line of video terminals produced from the late 1970s through the 1980s.\n\nUsers could ask their computers questions in BASIC (the de facto programming language of home computers at the time), and receive responses back from their machines. These responses were displayed on-screen in the form of text and graphics, an innovation made possible through storage tube technology.\n\nThis ad for the Tektronix 4051 is from April 1976."
      }
    />
  );
}

export default TektronixWinBoxContent;
