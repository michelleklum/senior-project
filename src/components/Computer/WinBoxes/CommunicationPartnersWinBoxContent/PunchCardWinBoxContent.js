import JPGWinBoxContent from "./JPGWinBoxContent";

function PunchCardWinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/PunchCard.jpg")}
      alt={"Punch card"}
      caption={
        'The punch card was one of the earliest mediums of computational communication. Programmers encoded messages for their machines via the presence / absence of holes on paper.\n\n"We had a human/computer interface a hundred years before we had computers. When computers came into being around the time of the Second World War, humans, quite naturally, communicated with them by simply grafting them on to the already-existing technologies for translating letters into bits and vice versa: teletypes and punch card machines."\n\n-- from Neal Stephenson\'s In the Beginning… Was the Command Line'
      }
    />
  );
}

export default PunchCardWinBoxContent;
