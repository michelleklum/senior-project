import JPGWinBoxContent from "./JPGWinBoxContent";

function PunchCardWinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/PunchCard.jpg")}
      alt={"Punch card"}
      caption={
        "The punch card was one of the earliest mediums of computational communication. Programmers encoded messages for their machines via the presence / absence of holes on paper."
      }
    />
  );
}

export default PunchCardWinBoxContent;
