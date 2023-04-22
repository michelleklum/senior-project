import JPGWinBoxContent from "./JPGWinBoxContent";

function TeletypeWinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/TeletypeModel33ASR.jpeg")}
      alt={"Teletype Model 33 ASR"}
      caption={
        'Originally used to send and receive telegrams, teletypes were later appropriated by computer programmers as some of the first computer interfaces.\n\nReleased in 1963, the Teletype Model 33 ASR had an eight-hole punched tape reader and tape punch, and remained popular until the late 1970s, when it was phased out in favor of more advanced video terminals.\n\nThe trigram "tty" that we see in modern-day terminal interfaces is an abbreviation for "teletype."'
      }
    />
  );
}

export default TeletypeWinBoxContent;
