function Erasure1WinBoxContent() {
  return (
    <div className="custom-winbox-child">
      <p>Women Computers:</p>
      <p>
        In the 1960s, when programming was seen as a menial job, and men found
        crunching numbers and punching cards distasteful, a quarter of computer
        programmers in America were women. During World War II, women computers
        were integral to the Allies' code-breaking efforts. At NASA, they
        computed mission-critical trajectories on which the first American
        spaceflights hinged. As New York Times reporter Clive Thompson puts it:
        "They were poets of bits."
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
      <div className="img img-right">
        <p>
          In fact, the first computer programmer, Ada Lovelace, was a woman. In
          the early 1800s, Lovelace, the daughter of the poet Lord Byron, worked
          closely with Charles Babbage on his Analytical Engine, one of the
          earliest mechanical computers. While translating Babbage's vision from
          French to English, Lovelace added annotations that resulted in a paper
          four times as long as the original. Her notes on the machine's
          operations outlined a new "science of operations" — which one might
          reasonably call computer science.
        </p>
        <img
          src={require("../img/AdaLovelace.png")}
          alt="An engraving of Ada Lovelace"
          width="40%"
        />
      </div>
      <p>
        It's a disgrace, then, that these women and their efforts have often
        gone unrecognized, erased from the computing canon, and omitted from the
        annals of history. For years, they sat,{" "}
        <a
          href="https://www.sfu.ca/wwest/WWEST_blog/herstory-of-the-tech-industry-when-women-were-computers.html"
          target="_blank"
          rel="noreferrer"
        >
          excluded from newspaper articles on early computing successes
        </a>
        ,{" "}
        <a
          href="https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac"
          target="_blank"
          rel="noreferrer"
        >
          unacknowledged at media events
        </a>
        , and{" "}
        <a
          href="https://www.space.com/32580-women-space-pioneers-emerge-from-lost-history.html"
          target="_blank"
          rel="noreferrer"
        >
          unidentified in photographic archives
        </a>
        .
      </p>
      <p>
        In the physical world, when a paper-and-pencil writer erases the written
        word, it disappears, lost forever to the fibers of the paper on which it
        was inscribed.
      </p>
      <p>
        But, as it turns out, in the digital world, erasure is never complete.
        You can never permanently erase something from a computer. You can
        delete it, move it to Trash, but a trace will always remain...
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
      <p>
        <a
          href="https://www.newyorker.com/tech/annals-of-technology/ada-lovelace-the-first-tech-visionary"
          target="_blank"
          rel="noreferrer"
        >
          https://www.newyorker.com/tech/annals-of-technology/ada-lovelace-the-first-tech-visionary
        </a>
      </p>
    </div>
  );
}

export default Erasure1WinBoxContent;
