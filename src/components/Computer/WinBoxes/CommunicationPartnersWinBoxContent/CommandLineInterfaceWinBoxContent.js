import JPGWinBoxContent from "./JPGWinBoxContent";

function CommandLineInterfaceWinBoxContent() {
  return (
    <JPGWinBoxContent
      src={require("../../img/MichellesTerminal.png")}
      alt={"Michelle's Mac Terminal"}
      caption={
        "A Command Line Interface is a computer application that prompts users to enter lines of text as input, then spits its own text back as output.\n\nThe Command Line Interpreter pictured here is the Z shell (Zsh), first released in 1990 and still in use today."
      }
    />
  );
}

export default CommandLineInterfaceWinBoxContent;
