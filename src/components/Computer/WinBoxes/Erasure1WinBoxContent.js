import "./Erasure1WinBoxContent.css";

function Erasure1WinBoxContent() {
  return (
    <div>
      <p>Women Computers:</p>
      <p>
        In the 1960s, when programming was seen as a menial job, and en found
        crunching numbers and punching cards distasteful, a quarter of computer
        programmers in America were women. During World War II, women computers
        assisted the Allies' code-breaking efforts. TODO FACTCHECK: At NASA,
        they computed mission-critical trajectories on which the success of
        [ENTER MISSIONS HERE] hinged. "They were poets of bits."
      </p>
      <div className="img">
        <img
          src={require("../img/WomenComputersEniac.png")}
          alt="Women computers at the Eniac"
          width="100%"
        />
        <p>
          <i>
            Programmers at the Eniac, the first programmable general-purpose
            computer.
          </i>
        </p>
      </div>
      <div id="ada">
        <p>
          In fact, the first computer programmer, Ada Lovelace, was a woman. In
          the early 1800s, Lovelace, the daughter of the poet Lord Byron, worked
          closely with Charles Babbage on his Analytical Engine, one of the
          first mechanical computers.
        </p>
        <img
          src={require("../img/AdaLovelace.png")}
          alt="An engraving of Ada Lovelace"
          width="35%"
        />
      </div>
      <p>
        TODO: SOMETHING ABOUT HOW WOMEN HAVE BEEN ERASED FROM THE HISTORY OF
        COMPUTING
      </p>
      <p>
        In the physical world, when a paper-and-pencil writer erases the written
        word, it disappears, lost forever to the fibers of the paper on which it
        was inscribed.
      </p>
      <p>
        But in the digital world, erasure is never complete. You can never
        permanently erase something from a computer. You can delete it, move it
        to Trash, but a trace will always remain...
      </p>
      <p>
        <a
          href="https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html"
          target="_blank"
          rel="noreferrer"
        >
          https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html
        </a>
      </p>
    </div>
  );
}

export default Erasure1WinBoxContent;
